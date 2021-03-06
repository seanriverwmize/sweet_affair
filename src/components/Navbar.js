import React from 'react'
import { Link } from 'gatsby'
import logo from '../../static/img/sweet_affairs_logo.png'

const Navbar = class extends React.Component {
  componentDidMount() {
    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(
      document.querySelectorAll('.navbar-burger'),
      0
    )
    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
      // Add a click event on each of them
      $navbarBurgers.forEach(el => {
        el.addEventListener('click', () => {
          // Get the target from the "data-target" attribute
          const target = el.dataset.target
          const $target = document.getElementById(target)

          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle('is-active')
          $target.classList.toggle('is-active')
        })
      })
    }
  }

  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              <img src={logo} alt="Kaldi" style={{ width: '160px' }} />
            </Link>
            {/* Hamburger menu */}
            <div className="navbar-burger burger" data-target="navMenu">
              <span />
              <span />
              <span />
            </div>
          </div>
          <div id="navMenu" className="navbar-menu">
            <div className="navbar-start has-text-centered">
              <Link className="navbar-item" to="/about">
                About
              </Link>
              <Link className="navbar-item" to="/cookies_brownies">
                Cookies & Brownies
              </Link>
              <Link className="navbar-item" to="/cakes">
                Cakes
              </Link>
              <Link className="navbar-item" to="/breads">
                Breads
              </Link>
              <Link className="navbar-item" to="/baked_goods">
                Baked Goods
              </Link>
              <Link className="navbar-item" to="/soups_salads">
                Soups & Salads
              </Link>
              <Link className="navbar-item" to="/gourmet_sandwiches">
                Gourmet Sandwiches
              </Link>
              <Link className="navbar-item" to="/holiday">
                Holiday Specials
              </Link>
              <Link className="navbar-item" to="/contact">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar

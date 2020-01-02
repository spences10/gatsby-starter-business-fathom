import { graphql, Link, StaticQuery } from 'gatsby'
import React from 'react'
import { useAnalytics } from '../../contexts/event-tracking'
import SearchBox from '../SearchBox'

const NavBar = ({ toggleNavbar, isActive }) => {
  const fa = useAnalytics()
  return (
    <StaticQuery
      query={graphql`
        query SearchIndexQuery {
          siteSearchIndex {
            index
          }
        }
      `}
      render={data => (
        <nav
          className="navbar is-fixed-top"
          aria-label="main navigation"
        >
          <div className="navbar-brand">
            <Link to="/" className="navbar-item">
              <strong>Gatsby Starter Business</strong>
            </Link>
            <button
              className={`button navbar-burger ${
                isActive ? 'is-active' : ''
              }`}
              data-target="navMenu"
              onClick={toggleNavbar}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
          <div
            className={`navbar-menu ${isActive ? 'is-active' : ''}`}
            id="navMenu"
          >
            <div className="navbar-end">
              <SearchBox searchIndex={data.siteSearchIndex.index} />
              <Link
                onClick={() => {
                  fa('CYYZD97C')
                }}
                className="navbar-item"
                to="/about"
              >
                About
              </Link>
              <Link
                onClick={() => {
                  fa('YNK3JR3X')
                }}
                className="navbar-item"
                to="/pricing"
              >
                Pricing
              </Link>
              <Link
                onClick={() => {
                  fa('VO7LTLOY')
                }}
                className="navbar-item"
                to="/blog"
              >
                Blog
              </Link>
              <div className="navbar-item">
                <div className="field is-grouped">
                  <p className="control">
                    <Link
                      onClick={() => {
                        fa('TDY5DIIA')
                      }}
                      className="button is-primary is-outlined"
                      to="/contact"
                    >
                      Contact Us
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </nav>
      )}
    />
  )
}

export default NavBar

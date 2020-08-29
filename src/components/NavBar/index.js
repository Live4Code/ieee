import React from 'react'
import { Link, graphql, StaticQuery, withPrefix } from 'gatsby'
import SearchBox from '../SearchBox'

const NavBar = ({ toggleNavbar, isActive }) => (
  <StaticQuery
    query={graphql`
            query SearchIndexQuery {
                siteSearchIndex {
                    index
                }
            }
        `}
    render={data => (
      <nav className='navbar is-fixed-top' aria-label='main navigation'>
        <div className='navbar-brand'>
          {/* <Link to='/' className='navbar-item'>
          </Link> */}
          <div className='left-pad'>
            <Link to='/' className='navbar-item'>
              <div className='header-img'>
                <img src={withPrefix('/img/ieee-header.png')} alt='IEEE EAV' />
              </div>
            </Link>
          </div>

          <button
            className={`button navbar-burger ${isActive ? 'is-active' : ''}`}
            data-target='navMenu'
            onClick={toggleNavbar}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
        <div className={`navbar-menu ${isActive ? 'is-active' : ''}`} id='navMenu'>

          <div className='navbar-end'>
            <SearchBox searchIndex={data.siteSearchIndex.index} />
            <Link className='navbar-item' to='/about'>
                            About
            </Link>
            <Link className='navbar-item' to='/news'>
                            News
            </Link>
            <Link className='navbar-item' to='/projects'>
                            Projects
            </Link>
            {/* <Link className='navbar-item' to='/resources'>
                            Resources
            </Link> */}
            <div className='navbar-item'>
              <div className='field is-grouped'>
                <p className='control'>
                  <Link
                    className='button is-primary is-outlined'
                    to='/contact'>
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

export default NavBar

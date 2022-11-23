import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  siteTitle,
} from './layout.module.css'

import { StaticImage } from 'gatsby-plugin-image'

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className={container}>
      <header className={siteTitle}>

        <Link to="/" className={navLinkText}>
          <StaticImage
            alt="logo of Look At Me Daycare"
            src="../images/website-icon.png"
            />
        </Link>

        {data.site.siteMetadata.title}

      </header>

      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText}>
              Home
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/about" className={navLinkText}>
              About
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/privacy" className={navLinkText}>
              Privacy
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/terms" className={navLinkText}>
              Terms
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/blog" className={navLinkText}>
              Blog
            </Link>
          </li>
        </ul>
      </nav>

      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>

      <footer>

        <section>
          <h1>No More Paper!</h1>
          <h4>Available on Apple™ iOS devices.</h4>
          <h4>Download now to get started!</h4>

      

          <Link to="https://apps.apple.com/us/app/look-at-me-daycare/id1254621223" className={navLinkText}>
            <StaticImage
              alt="logo of Look At Me Daycare"
              src="../images/app-store-badge.svg"
            />
          </Link>


        </section>

        <nav>
          <ul className={navLinks}>
            <li className={navLinkItem}>
              <Link to="/" className={navLinkText}>
                Home
              </Link>
            </li>
            <li className={navLinkItem}>
              <Link to="/about" className={navLinkText}>
                About
              </Link>
            </li>
            <li className={navLinkItem}>
              <Link to="/privacy" className={navLinkText}>
                Privacy
              </Link>
            </li>
            <li className={navLinkItem}>
              <Link to="/terms" className={navLinkText}>
                Terms
              </Link>
            </li>
            <li className={navLinkItem}>
              <Link to="/blog" className={navLinkText}>
                Blog
              </Link>
            </li>
          </ul>
        </nav>
      </footer>

    </div>
  )
}

export default Layout

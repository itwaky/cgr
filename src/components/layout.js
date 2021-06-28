import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import parse from "html-react-parser"

const Layout = ({ isHomePage, children, menu }) => {
  const {
    wp: {
      generalSettings: { title },
    },
  } = useStaticQuery(graphql`
    query LayoutQuery {
      wp {
        generalSettings {
          title
          description
          menu
        }
      }
    }
  `)

  return (
    <div className="global-wrapper" data-is-root-path={isHomePage}>
      <header className="global-header">
        {isHomePage ? (
          <h1 className="main-heading">
            <Link to="/">{parse(title)}</Link>
          </h1>
        ) : (
          <Link className="header-link-home" to="/">
            {title}
          </Link>
        )}
      </header>

      <main>
            {children}
            {menu}
      </main>

      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">gatsby</a>
        {` `}
        And <a href="https://wordpress.org/">WordPress</a>
      </footer>
    </div>
  )
}

export default Layout

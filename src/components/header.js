import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

//import './header.module.scss'
import headerStyles from './header.module.scss'

const Header = () => {
    const data = useStaticQuery(graphql`
    query {
        site {
          siteMetadata {
            title
            author
            description
          }
        }
      }
    `)
    return (
        <header className={headerStyles.header}>
            <h1>
                <Link className={headerStyles.title} to="/">
                    {data.site.siteMetadata.author} <span>- {data.site.siteMetadata.title}</span>
                </Link>
            </h1>
            <nav>
                <ul className={headerStyles.navList}>
                    <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/">Home</Link></li>
                    <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/about">About Me</Link></li>
                    <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/blog">A blog about me</Link></li>
                    <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/contact">Contact Me</Link></li>
                </ul>
            </nav>

        </header>
    )
}

export default Header
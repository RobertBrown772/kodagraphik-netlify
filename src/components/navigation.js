import React from 'react'
import {useStaticQuery, graphql } from "gatsby"
import headerStyles from './navigation.module.scss'
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Image from "gatsby-image"


const Navigation = () => {
    const data = useStaticQuery(graphql`
    query LogoQuery {
        file(absolutePath: { regex: "/KodaHeroLogo.png/" }) {
          childImageSharp {
            fixed(width: 100) {
                base64
                width
                height
                src 
                srcSet
            }
          }
        }
      }
    `)
 
  
    return (
      <div>
        <div className="navigation" id="navbar">
            <div className="container">
            <div className="logo">
                <AniLink
                duration={0.8}
                cover
                direction="right"
                bg="#72d84b"
                to="/"
                >
                <Image fixed={data.file.childImageSharp.fixed}/>
                </AniLink>
            </div>
            <div className="buttons mobilebutton d-block d-md-none">
                <ul>
                    <li>
                        <AniLink 
                         paintDrip
                         hex="#535353" 
                         duration={0.5}
                         className={headerStyles.link}
                         activeClassName={headerStyles.activeLink}
                         to="/mobilenav">☰</AniLink>
                    </li>
                </ul>
            </div>
            <div className="buttons d-none d-md-block">
                <ul>
                    <li>
                        <AniLink 
                         cover
                         direction="right"
                         bg="#72d84b"
                         duration={0.8}
                         className="link hvr-underline-from-center"
                         activeClassName={headerStyles.activeLink}
                         to="/">Home</AniLink>
                    </li>
                    <li>
                        <AniLink 
                         cover
                         direction="right"
                         bg="#72d84b"
                         duration={0.8}
                         className="link hvr-underline-from-center" 
                         activeClassName={headerStyles.activeLink} 
                         to="/about">About</AniLink>
                    </li>
                    <li>
                        <AniLink 
                         cover
                         direction="right"
                         bg="#72d84b" 
                         duration={0.8}
                         className="link hvr-underline-from-center" 
                         activeClassName={headerStyles.activeLink} 
                         to="/projects">Projects</AniLink>
                    </li>
                    <li> 
                    <AniLink 
                         cover
                         direction="right"
                         bg="#72d84b" 
                         duration={0.8}
                         className="link hvr-underline-from-center" 
                         activeClassName={headerStyles.activeLink} 
                         to="/contact">Contact</AniLink>
                    </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    )
  }
  
  export default Navigation
import React from 'react'
import {useStaticQuery, graphql } from "gatsby"
import MobileStyles from '../components/mobilenav.module.scss'
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Image from "gatsby-image"


const Navigation = () => {
    const data = useStaticQuery(graphql`
    query mobileNavQuery {
        file(absolutePath: { regex: "/KodaHeroLogo.png/" }) {
          childImageSharp {
            fixed(width: 120) {
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
        <div className="mobile-navigation">
            <div className="container">
            <div className="logo">
                <AniLink
                duration={0.5}
                paintDrip
                hex="#72d84b"
                to="/"
                >
                <Image fixed={data.file.childImageSharp.fixed}/>
                </AniLink>
            </div>
            <hr/>
            <div className="buttons">
                <ul>
                    <li>
                        <AniLink 
                        paintDrip
                         hex="#72d84b"
                         duration={0.5}
                         className={MobileStyles.link} 
                         activeClassName={MobileStyles.activeLink}
                         to="/">Home</AniLink>
                    </li>
                    <li>
                        <AniLink 
                        paintDrip
                         hex="#72d84b"
                         duration={0.5}
                         className={MobileStyles.link} 
                         activeClassName={MobileStyles.activeLink} 
                         to="/about">About</AniLink>
                    </li>
                    <li>
                        <AniLink 
                        paintDrip
                         hex="#72d84b" 
                         duration={0.5}
                         className={MobileStyles.link} 
                         activeClassName={MobileStyles.activeLink} 
                         to="/projects">Projects</AniLink>
                    </li>
                    <li>
                    <AniLink 
                        paintDrip
                         hex="#72d84b" 
                         duration={0.5}
                         className={MobileStyles.link} 
                         activeClassName={MobileStyles.activeLink} 
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
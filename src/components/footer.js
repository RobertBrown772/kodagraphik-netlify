import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import AniLink from "gatsby-plugin-transition-link/AniLink"
// import headerStyles from './navigation.module.scss'
import footerStyles from './footer.module.scss'
import Image from "gatsby-image"

const Footer = () => {

    const data = useStaticQuery(graphql`
query FooterLogoQuery {
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

        return(
            <footer>
                <div className="container">
                   <div className="row py-4">
                       <div className="col-sm-4">
                        <div className="buttons">
                        <ul>
                            <li>
                                <AniLink 
                                cover
                                direction="right"
                                bg="#72d84b"
                                duration={0.8}
                                className={footerStyles.link} 
                                activeClassName={footerStyles.activeLink}
                                to="/">Home</AniLink>
                            </li>
                            <li>
                                <AniLink 
                                cover
                                direction="right"
                                bg="#72d84b"
                                duration={0.8}
                                className={footerStyles.link} 
                                activeClassName={footerStyles.activeLink} 
                                to="/about">About</AniLink>
                            </li>
                            <li>
                                <AniLink 
                                cover
                                direction="right"
                                bg="#72d84b" 
                                duration={0.8}
                                className={footerStyles.link} 
                                activeClassName={footerStyles.activeLink} 
                                to="/projects">Projects</AniLink>
                            </li>
                            <li>
                            <AniLink 
                                cover
                                direction="right"
                                bg="#72d84b" 
                                duration={0.8}
                                className={footerStyles.link} 
                                activeClassName={footerStyles.activeLink} 
                                to="/contact">Contact</AniLink>
                            </li>
                        </ul>
                    </div>
                </div>
                <hr className="d-block d-sm-none"/>
                <div className="col-sm-4">
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
                       </div>
                       <hr className="d-block d-sm-none"/>
                        <div className="col-sm-4">
                            <div className="socials">
                                <ul>
                                    <li>
                                        <a className={footerStyles.link} href="https://www.linkedin.com/in/robert-brown-570000142/">Linkedin</a>
                                    </li>
                                    <li>
                                        <a className={footerStyles.link} href="https://www.instagram.com/kodagraphik/?hl=en">Instagram</a>
                                    </li>
                                    <li>
                                        <a className={footerStyles.link} href="https://www.behance.net/RobertJBrown">Behance</a>
                                    </li>
                                </ul>


                                
                            </div>
                        </div>
                   </div> 
                </div>
                <div className="copyright">
                    <p>© Rob Brown 2020</p>
                </div>
            </footer>
        )
}

export default Footer
/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
**/

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
 
const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.png/" }) {
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
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  const { author, social } = data.site.siteMetadata
  return (
    <div className="bio">
      <Image
      className="bio-image"
        fixed={data.avatar.childImageSharp.fixed}
        alt={author.name}
      />
      <p>
        Written by <strong>{author.name}</strong> {author.summary}
        {` `}
      </p>
    </div>
  )
}

export default Bio

import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title  
  const { previous, next } = pageContext

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />

      
      <article className="articleBody" itemScope itemType="http://schema.org/Article">
        <header className="mb-3">
          <h1>
            {post.frontmatter.title}
          </h1>
          <p className=" date d-none d-md-block">
            {post.frontmatter.date}
          </p>
        </header>
        <hr/>
        <section dangerouslySetInnerHTML={{ __html: post.html }} itemProp="articleBody"/>
        <hr/>
          <Bio />
      </article>

      <nav className="projectnav">
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <AniLink
              duration={0.5}
              paintDrip
              hex="#72d84b"
              to={previous.fields.slug} 
              rel="prev"
              >
                ← {previous.frontmatter.title}
              </AniLink>
            )}
          </li>
          <li>
            {next && (
              <AniLink
              duration={0.5}
              paintDrip
              hex="#72d84b"
              to={next.fields.slug} 
              rel="next"
              >
                {next.frontmatter.title} →
              </AniLink>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`

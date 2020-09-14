import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import AniLink from "gatsby-plugin-transition-link/AniLink"
 
const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges


  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="PROJECTS" />
      <div className="container projects-page">
             <div className="row contact-row">
                    <div className="col-sm-12 text-center col-md-12">
                        <h3>KODAGRAPHIK</h3>
                        <hr className="my-2"/>
                        <p className="text-md poppins">GRAPHIC DESIGN   |   WEB DESIGN  |   DEVELOPMENT</p>
                        <p>More Projects Coming Soon</p>
                    </div>
             </div>
        </div>
      <div className="all-articles mt-3 row">
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        return (
          <article
            key={node.fields.slug}
            itemScope
            itemType="http://schema.org/Article"
            className = "col-md-4"
          >
            <div className="article-inner">
            <header>
              <h3>
                <AniLink 
                paintDrip
                duration={0.5}
                hex="#72d84b" 
                to={node.fields.slug} 
                itemProp="url"
                >
                  <span className="poppins text-st" itemProp="headline">{title}</span>
                </AniLink>
              </h3>
              <small className="date">{node.frontmatter.date}</small>
            </header>
            <hr className="my-1"/>
            <section>
              <p
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
                itemProp="description"
              />
            </section>
            </div>
          </article>
        )
      })}
      </div>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`

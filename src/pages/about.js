import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Layout from '../components/layout'
import SEO from "../components/seo"
import Image from "gatsby-image"

const About = () => {
    const data = useStaticQuery(graphql`
    query AboutQuery {
        avatar: file(absolutePath: { regex: "/profile-pic.png/" }) {
          childImageSharp {
            fixed(width: 150) {
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
            }
          }
        }
      }
    `)
    const { author, social } = data.site.siteMetadata

    return (
        <Layout>
        <SEO title="ABOUT" /> 
         <div className="about-page">
         <div className="container mt-3">
             <div className="row bio-row">
                    <div className="col-sm-12 text-center col-md-12">
                    <Image
                        className="bio-image  my-3"
                        fixed={data.avatar.childImageSharp.fixed}
                        alt={author.name}
                    />
                    </div>
             </div>
             <div className="content-row">
            <div className="row">
                <div className="col-sm-4 col-md-2">
                    <h5 className="display text-center mb-sm-3">Personal Bio</h5>
                </div>
                <div className="col-sm-8 col-md-10">
                    <h5 className="text-bold text-muted">Who Am I?</h5>
                    <p className="text-bold text-df-plus text-primary mt-2">Rob Brown - An Experienced 26 Year Old Graphic Designer/Web Developer with a demonstrated history of working closely in retail and consumer hospitality industries with major multinational corporation clients.
                    <br/><br/>
                    Skilled in Graphic Communication/ Design, Digital Printing & Dye Sublimation Tech, Agile Methodologies, Adobe Creative Suite, Sketch/Fima & UI/Design Management Tools, User Interface Design, Email Campaign Design, Growing knowledge of Web Technologies including HTML, CS/SASS , JS/Jquery, PHP + More. I have a demonstrated past of being an integrated team-player alongside marketers, designers and developers alike. A performance driven, art and design professional with a BA focused in Graphic Communications from University for the Creative Arts. </p>
                </div>
            </div>
            <hr className="my-5" />
            <div className="row">
                <div className="col-sm-4 col-md-2">
                    <h5 className="display text-center mb-sm-3">Key Skills</h5>
                </div>
                <div className="col-sm-8 col-md-10">
                    <h5 className="text-bold text-muted">Tech Skills</h5>
                    <ul className="two">
                        <li>Adobe Creative Suite 7+ Years</li>
                        <li>InDesign CC</li>
                        <li>Illustrator CC</li>
                        <li>Photoshop CC</li>
                        <li>Muse CC</li>
                        <li>Sketch  & Figma</li>
                        <li>Invision & Moqups</li>
                        <li>HTML, CSS & SASS</li>
                        <li>jQuery & Basic Javascript</li>
                        <li>PHP 7</li>
                        <li>Google Suite, Pages, Sheets, Drive etc</li>
                        <li>Microsoft Office, Word, Powerpoint, Excel</li>
                        <li>Dynamic Nav, Business Central 365</li>
                        <li>Onyx Rip & Print Rip Softwares</li>
                        <li>Basic Blender & 3D Rendering</li>
                        <li>Vector Icon & Logos</li>
                        <li>Mailchimp Email Campaigns</li>
                    </ul>
                    <h5 className="mt-4 text-bold text-muted">Other Skills</h5>
                    <ul className="two">
                        <li>Understanding of Kanban & Agile Methodologies</li>
                        <li>4+ Years Design Studio Experience</li>
                        <li>Full Clean UK Drivers License</li>
                        <li>Quick learner of new skills & technologies</li>
                        <li>Experience working with different Industries</li>
                        <li>Detailed eye for design and detailed work</li>
                    </ul>
                </div>
            </div>
            <hr className="my-5" />
            <div className="row">
                <div className="col-sm-4 col-md-2 mb-sm-3">
                    <h5 className="display text-center">Previous Employment</h5>
                </div>
                <div className="col-sm-8 col-md-10">
                    <h5 className="text-bold text-muted">Web Designer & Frontend Developer</h5>
                    <p className="text-bold text-df-plus text-primary">Mr Zen, Farnham</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque deserunt, obcaecati sint debitis itaque quaerat at harum animi iusto commodi praesen
                    tium quidem error dolore voluptas totam quis non pariatur voluptatibus!</p>

                    <h5 className=" mt-5 text-bold text-muted">Homepage Management & Designer</h5>
                    <p className="text-bold text-df-plus text-primary">Shopto.co.uk, Bracknell</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque deserunt, obcaecati sint debitis itaque quaerat at harum animi iusto commodi praesentium quidem error dolore voluptas totam quis non pariatur voluptatibus!</p>

                    <h5 className=" mt-5 text-bold text-muted">Template/Content Management Developer</h5>
                    <p className="text-bold text-df-plus text-primary">Elateral Ltd, Farnham</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque deserunt, obcaecati sint debitis itaque quaerat at harum animi iusto commodi praesentium quidem error dolore voluptas totam quis non pariatur voluptatibus!</p>

                    <h5 className=" mt-5 text-bold text-muted">Print House Operative</h5>
                    <p className="text-bold text-df-plus text-primary">IDT Systems Ltd, Farnham</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque deserunt, obcaecati sint debitis itaque quaerat at harum animi iusto commodi praesentium quidem error dolore voluptas totam quis non pariatur voluptatibus!</p>
                </div> 
            </div>


        <hr className="my-5" />

        <div className="container mb-5">
            <div className="row">
                <div className="col-sm-4 col-md-2">
                    <h5 className="display text-center mb-sm-3">Education</h5>
                </div>
                <div className="col-sm-8 col-md-10">
                    <h5 className="text-bold text-muted">2:1 Graphic Design & Communication 2015</h5>
                    <p className="text-bold text-df-plus text-primary">University Of Creative Arts - Farnham</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque deserunt, obcaecati sint debitis itaque quaerat at harum animi iusto commodi praesentium quidem error dolore voluptas totam quis non pariatur voluptatibus!</p>

                    <h5 className=" mt-5 text-bold text-muted">A Level and GCSEs</h5>
                    <p className="text-bold text-df-plus text-primary">Christ's College - Guildford</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque deserunt, obcaecati sint debitis itaque quaerat at harum animi iusto commodi praesentium quidem error dolore voluptas totam quis non pariatur voluptatibus!</p>
                </div>
            </div>
        </div>
        </div>
        </div>
  </div>
</Layout>

    );
  }

  export default About
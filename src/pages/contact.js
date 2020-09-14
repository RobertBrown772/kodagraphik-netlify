import React from 'react'
import Layout from '../components/layout'
import SEO from "../components/seo"

export default function Contact() {
    return (
        <Layout>
        <SEO title="CONTACT" />
        <div className="contact-page">
         <div className="container mt-3">
             <div className="row contact-row">
                    <div className="col-sm-12 text-center col-md-12">
                        <h3>CONTACT ME</h3>
                        <hr className="my-2"/>
                        <p className="text-md poppins">KODAGRAPHIK@GMAIL.COM</p>
                        <p>More Coming Soon</p>
                    </div>
             </div>
        </div>
        </div>
        </Layout>

    );
  }
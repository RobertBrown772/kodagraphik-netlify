import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'

export default function Home() {
    return (
        <Layout>
        <SEO title="Home" />
        <div className="home-page">
         <div className="container mt-3">
             <div className="row contact-row">
                    <div className="col-sm-12 text-center col-md-12">
                        <h3>KODAGRAPHIK</h3>
                        <hr className="my-2"/>
                        <p className="text-md poppins">GRAPHIC DESIGN   |   WEB DESIGN  |   DEVELOPMENT</p>
                        <p>More Coming Soon</p>
                    </div>
             </div>
        </div>
        </div>
        </Layout>

    );
  }
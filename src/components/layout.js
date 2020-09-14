import React from "react"
import Navigation from './navigation' 
import Footer from './footer'
import '../styles/index.scss' 

function Layout(props){
return(
  <div>
    <Navigation />
      <div className="container page-section">
        {props.children}
    </div>
    <Footer />
  </div>
  

    )

}

export default Layout

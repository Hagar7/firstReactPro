import React from 'react'
import style from './About.module.css'

export default function About() {
  return (
    <>
    <div className={`${style.about}`} id="about">
        <div className="container">
            <h2>About</h2>
            <span><i className="fa-solid fa-star" /></span>
            <div className="row pt-5 ">
                <div className="col-lg-4 offset-lg-2 col-md-12">
                <div className= {`${style.item} `} >
                <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                    </div> 
                </div>
                <div className=" col-lg-4 col-md-12">
                <div className= {`${style.item} `} >
                <p>You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!</p>
                    </div> 
                </div>
            </div>
        </div>
    </div>
    
    </>
  )
}

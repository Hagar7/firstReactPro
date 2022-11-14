import React from 'react'
import style from './Footer.module.css'

export default function Footer() {
  return (
    <>
    <footer>
       <div className="container">
        <div className="row">
            <div className="col-lg-3 offset-lg-2 ">
                <div className={`${style.item}`}>
                    <h3>LOCATION</h3>
                   <p>2215 John Daniel DriveClark, MO 65243</p>
                </div>
            </div>
            <div className="col-lg-3">
                <div className={`${style.item}`}>
                    <h3>AROUND THE WEB</h3>
                    <div className={`${style.links}`}>
                        <span><i className='fa-brands fa-facebook-f' /></span>
                        <span><i className='fa-brands fa-twitter' /></span>
                        <span><i className='fa-brands fa-instagram' /></span>
                        <span><i className='fa-brands fa-youtube' /></span>
                    </div>

                </div>
            </div>
            <div className="col-lg-3">
                <div className={`${style.item}`}>
                    <h3>ABOUT FREELANCER</h3>
                   <p>Freelance is a free to use, MIT licensed Bootstrap theme created by Route</p>
                   
                </div>
            </div>




        </div>
        </div> 
    </footer>

    <div className={`${style.copy}`}>
        <p>Copyright © Your Website 2021</p>
    </div>
    
    
    </>
  )
}

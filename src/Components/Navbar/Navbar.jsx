import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'

export default function Navbar() {
  return (
    <>
<nav className={`${styles.test} navbar navbar-expand-lg navbar-dark text-dark fixed-top`}>
  <div className="container">
    <a className= {`${styles.space} navbar-brand `}  href="/#">Start React</a>
    <button className= {`${styles.toggle}  navbar-toggler`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" >
       <span>Menu</span> 
      <span className={`${styles.myIcon}  navbar-toggler-icon`} />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className= " navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className={`${styles.uniColor} nav-link active`} aria-current="page" to="" >Home</Link>
        </li>
        <li className="nav-item" >
          <Link className= {`${styles.whiteColor} nav-link`} to="about" >About</Link>
        </li> 
        <li className="nav-item" >
          <Link className= {`${styles.whiteColor} nav-link`} to="movies" >Movies</Link>
        </li> 
        <li className="nav-item" >
          <Link className= {`${styles.whiteColor} nav-link`} to="portofolio" >Portofolio</Link>
        </li> 
        <li className="nav-item">
          <Link className={`${styles.whiteColor} nav-link`} to="contact">Contact</Link>
        </li> 
      </ul>

    </div>
  </div>
</nav>
    </>
  )
}

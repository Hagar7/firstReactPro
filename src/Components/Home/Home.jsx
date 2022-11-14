import React from 'react'
import style from './Home.module.css';
export default function Home() {
  return (
    <>
    <div className={style.home}>
        <div className="container">
            <div className={style.info}>
            <img src="./images/avataaars.svg" alt="boy"/>
            <h1>START REACT</h1>
            <span><i className="fa-solid fa-star" /></span>
            <p>Graphic Artist - Web Designer - Illustrator</p>
            </div>
        </div>
    </div>
    
    </>
  )
}

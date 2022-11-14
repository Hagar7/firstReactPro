import axios from 'axios'
import React, { useEffect, useState } from 'react'
import style from "./Movies.module.css";


export default function Coueses() {
let[movies,setMovies] = useState([])

let getMovies =async()=>{
  let {data} =await axios.get('https://api.themoviedb.org/3/trending/all/day?api_key=e5ba4ad63192804f5a357746afe9a74a')
  setMovies(data.results);

  
}
let myImg = "https://image.tmdb.org/t/p/w500";

useEffect(()=>{
    getMovies()
},[])

  return (
<>
      <div className={`${style.course}`}>
        <div className="container">
        <h2>Movies</h2>
          <span>
            <i className="fa-solid fa-star" />
          </span>
        <div className="row g-5">
          {
            movies.map((movie,index)=>
            <div className="col-md-3" key={index}>
              <div className={`${style.item}`}>
             <img src={`${myImg}${movie.poster_path}`}  alt="" className={`${style.imgy} w-100`}/>
             {movie.title?<h5 className={`${style.title}  m-3`}>{movie.title}</h5>:<h5 className={`${style.title} m-3`}>Movie</h5>}
              </div>
            </div>
            )}
        </div>
     </div>
     </div>

</>
  )
}

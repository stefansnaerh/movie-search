import React from "react"






export default function Card(props) {


    const poster_url = "https://image.tmdb.org/t/p/w500/" + props.item.poster_path

    return (
        <div >
        <div className="card">
           <img src={poster_url} alt="movie-poster" className="poster"></img>
           <h1 className="card-title">{props.item.original_title}</h1>
           <h2 className="year-of-release">{props.item.release_date}</h2>
        </div>
        </div>
    )
    
}


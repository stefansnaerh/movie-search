import {useEffect, useState} from "react"
import Card from "./Card"

export default function Main() {

    const API_KEY = "6af2e686b425c8e3274b4275976091e1"
    const BASE_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;

  

    const [allMovies, setAllMovies] = useState([])

 console.log(allMovies)

    useEffect(() => {
        fetch(`${BASE_URL}`)
            .then(res => res.json())
            .then(data => setAllMovies(data.results))
    }, [])

    const [movie, setMovie] = useState({
        poster_path: "",
        original_title: "",
        release_date: ""
    })
  
    

    function random() {
// function to get a random movie when you click the button
// Math floor is a higher order function since it takes another function as a argument

        const randomNumber = Math.floor(Math.random() * allMovies.length)

        const movieName = allMovies[randomNumber].original_title
        const url = allMovies[randomNumber].poster_path
        const yearOfRelease = allMovies[randomNumber].release_date
        setMovie(prevMovie => ({
            ...prevMovie,
            poster_path: url,
            original_title: movieName,
            release_date: yearOfRelease
        }))
    
    }

 /* in line 34 I use a map() method to map over the allMovies array. Map is a pure function since it doesn't change the original array but returns a new array
  Map is also a higher order function as it takes a function as an argument */

    return (
        <div>
        <div className="main-container">
            <section className="search-headline-container">
            <button type="submit" onClick={random}>Push to get a random movie!</button>
            <h2 className="headline">Most popular movies right now!</h2>
            </section>
       </div>
       <div className="cards-list">
       {movie.poster_path?( <Card item={movie}/>):(    
           allMovies.map(item => {
               return (
                   <Card
                   key={item.id}
                   item={item}/>
               )
           }))}
       
        </div>
        </div>
    )
}
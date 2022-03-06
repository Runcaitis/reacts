import React, { useEffect, useState } from 'react';
import MovieCard from './MovieCard'

import  './App.css';
import SearchIcon from './search.svg';

const API_URL = 'http://www.omdbapi.com?apikey=22d89e4b';

const movie1 = {
        "Title": "Big Fish",
        "Year": "2003",
        "imdbID": "tt0319061",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMmU3NzIyODctYjVhOC00NzBmLTlhNWItMzBlODEwZTlmMjUzXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg"
}

const App = () => {
   const [movies, setMovies] = useState([]);
    const[searchTerm, setSearchTerm] = useState('');

        const searchMovies = async (title) => {
                const response = await fetch(`${API_URL}&s=${title}`);
                const data = await response.json();
            
               setMovies(data.Search);
        }

            useEffect(() =>{
                searchMovies("attack on titan");
    }, []);


    return (

        

        <div className='app'>
           
            
        
                <h1>Runcīša filmas</h1>
            <div className='search'>
                <input
                placeholder="Meklēt filmas"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                />
            <img
            src={SearchIcon}
            alt="meklēt"
            onClick={() => searchMovies(searchTerm)}
            />
            </div>

            {
                movies?.length > 0
                ? (
                    <div className='container'>
                  {movies.map((movie) => (
                      <MovieCard movie={movie}/>

                  ))}

                    </div>
                ) : 
                (
                    <div className='empty'>
                        <h2>Nav filmas</h2>
                    </div>

                )
            }
                
               
        </div>
    );

}

export default App;
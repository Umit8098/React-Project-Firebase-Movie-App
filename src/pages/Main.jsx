import axios from 'axios';
import { useEffect, useState } from 'react';
import MovieCard from '../components/MovieCard';
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";


const API_KEY = process.env.REACT_APP_TMDB_KEY;
const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`;

const Main = () => {

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  
  // context'ten currenIUser verisinin çekilmesi;
  const {currentUser} = useContext(AuthContext)

  useEffect( () => {
    getMovies(FEATURED_API)
  }, [])

  const getMovies = (API) => {
    setLoading(true);
    axios
      .get(API)
      // .then(res => console.log(res.data.results))
      .then(res => setMovies(res.data.results))
      .catch(err => console.log(err))
      .finally(() => setLoading(false));  
  }

  // search movie için search API'si ve aranacak movie
  const handleSubmit = (e) => {
    e.preventDefault()
    // getMovies(SEARCH_API+searchTerm)
    // searchTerm && getMovies(SEARCH_API+searchTerm)
    if (currentUser && searchTerm) {
      getMovies(SEARCH_API+searchTerm);
    } else if (!searchTerm) {
      alert("Please login to search a movie");
    } else {
      alert("Please login.")
    }
  }

  return (
    <>
      {/* search movie için form */}
      <form 
        action="" 
        className='search'
        onSubmit={handleSubmit}
      >
        <input 
          type="search"
          className='search-input'
          placeholder='search a movie...'
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button 
          type='submit' 
          className='btn btn-primary px-4 ms-2 rounded-pill shadow-sm'
        >Search</button>
      </form>

      <div className='d-flex justify-content-center flex-wrap'>
        { loading ? 
            (<div className="spinner-border text-primary m-5" role="status">
              <span className="sr-only">Loading...</span>
            </div>
            ) : (
              movies?.map((movie) => <MovieCard key={movie.id} {...movie}/>)
            )
        }

      </div>
    </>
  )
}

export default Main;
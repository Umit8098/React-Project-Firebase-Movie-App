import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom'
import VideoSection from '../components/VideoSection';

const MovieDetail = () => {

  //! url'den gelen id datasını çekme;
  const { id } = useParams();

  //! id kullanacağımız için, componentin içinde yazıyoruz..
  const API_KEY = process.env.REACT_APP_TMDB_KEY;
  const movieDetailBaseUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`;
  // VideoSection;
  const videoUrl = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}`;
  const baseImageUrl = 'https://image.tmdb.org/t/p/w1280';
  const defaultImage =
    'https://images.unsplash.com/photo-1581905764498-f1b60bae941a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80';

  const [movieDetails, setMovieDetails] = useState({})
  const {
    title, 
    poster_path, 
    overview, 
    release_date, 
    vote_average, 
    vote_count
  } = movieDetails
  console.log(movieDetails);

  // VideoSection
  const [videoKey, setVideoKey] = useState();

  useEffect(()=>{
    axios
      .get(movieDetailBaseUrl)
      .then(res => setMovieDetails(res.data))
      .catch(err => console.log(err));
    // VideoSection
    axios
      .get(videoUrl)
      .then((res) => setVideoKey(res.data.results[0].key))
      .catch((error) => console.log(error));
  }, [movieDetailBaseUrl, videoUrl]) 
  // dependency array kullanmazsak comp.mount gibi çalışacak. istediğimiz gibi..
  // dependency array kullanırsak comp.update gibi çalışacak, o zaman da;
  // dep.array içine movieDetailBaseUrl yazarsak, buradaki her değişiklikte çalışacak.

  return (
    <div className="container py-5">
      <h1 className="text-center">{title}</h1>
      {/* VideoSection */}
      {videoKey && <VideoSection videoKey={videoKey} />}
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={poster_path ? baseImageUrl + poster_path : defaultImage}
              className="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div className="col-md-8 d-flex flex-column ">
            <div className="card-body">
              <h5 className="card-title">Overview</h5>
              <p className="card-text">{overview}</p>
            </div>
            <ul className="list-group ">
              <li className="list-group-item">
                {'Release Date : ' + release_date}
              </li>
              <li className="list-group-item">{'Rate : ' + vote_average}</li>
              <li className="list-group-item">
                {'Total Vote : ' + vote_count}
              </li>
              <li className="list-group-item d-flex justify-content-center align-items-center">
                <Link 
                  to={-1}
                  className="btn btn-primary rounded-pill px-4 py-2 shadow-sm"
                  >Go back</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieDetail;
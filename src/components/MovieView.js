import Hero from './Hero';
import { useParams } from 'react-router-dom';
import {useEffect, useState} from 'react';


const MovieView = () => {

  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [movieGenres, setMovieGenres] = useState([]);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=1e17d1ce4e262e481dcf01400724e434&language=en-US`)
    .then(response => response.json())
    .then(data => {
      setMovieDetails(data);
      setMovieGenres([...data.genres])
      setIsLoading(false);
    })
  }, [id])

  function generateGenres() {
    return (
      <>
        {movieGenres.map((genre, id) => <li key={id}> {genre.name} </li>)}
      </>
    )
  }

  function renderMovieDetails() {
    if (isLoading) {
      return <Hero text="Loading..." />;
    }
    if (movieDetails) {
      let posterPath = "http://placehold.jp/919191/ffffff/500x750.png?text=Image%20Not%20Available";
      if (movieDetails.poster_path != null) {
        posterPath = `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`;
      }
      const backdropUrl = `https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`
      return (
        <>
          <Hero text={movieDetails.original_title} backdrop={backdropUrl} />
          <div className="container my-5">
            <div className="row">
              <div className="col-md-3">
                <img src={posterPath} alt="..." className="img-fluid shadow rounded" />
              </div>
              <div className="col-md-9">
                <h2>{movieDetails.original_title}</h2>
                <p className="lead">
                  {movieDetails.overview}
                </p>
                <h4>TMDB Rating: {movieDetails.vote_average}<span className="fs-6">/10</span></h4>
                <p>Ratings: {movieDetails.vote_count}</p>

                <div className="d-flex">

                  <a target="_blank" rel="noreferrer" href={`https://www.themoviedb.org/movie/${movieDetails.id}`}>
                      <button className="btn btn-info m-2">Go to TMDB page</button>
                    </a>

                    {movieDetails.imdb_id &&
                  <div>
                    <a target="_blank" rel="noreferrer" href={`https://www.imdb.com/title/${movieDetails.imdb_id}`}>
                      <button className="btn btn-warning my-2">Go to IMDB page</button>
                    </a>
                  </div>}

                  </div>
                
                <div>
                  <h4>Genre:</h4> {generateGenres()}
                </div>
              </div>
            </div>
          </div>
        </>
      );
    }
  }

    return renderMovieDetails()
  }

  export default MovieView;

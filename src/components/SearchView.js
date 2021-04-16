import Hero from './Hero'
import {Link} from 'react-router-dom'

const MovieCard = ({movie}) => {

    let posterUrl = "http://placehold.jp/919191/ffffff/500x750.png?text=Image%20Not%20Available"

    if (movie.poster_path != null) {
      posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    }

    const detailUrl = `/movies/${movie.id}`
    return (
      <div className="col-md-3 col-2 my-4">
        <div className="card">
          <img
            src={posterUrl}
            className="card-img-top"
            alt={movie.original_title}
          />
          <div className="card-body">
            <h5 className="card-title">{movie.original_title}</h5>
            <Link to={detailUrl} className="btn btn-primary">
              Show Details
            </Link>
          </div>
        </div>
      </div>
    );
}


const SearchView = ({keyword, searchResults}) => {
    const title = `You are searching for ${keyword}`;

    const resultsHtml = searchResults.map((obj, i) => {
        return <MovieCard movie={obj} key={i} />
    })

    return (
        <>
            <Hero text={title} />
            {resultsHtml &&
                <div className="container">
                    <div className="row">
                        {resultsHtml}
                    </div>
                </div>}
            <h3 className="m-5">Sorry! No results found for <u>{keyword}</u></h3>
        </>
    )
}

export default SearchView;
import Hero from './Hero'
import image from '../images/background-image.jpg'
import { useHistory} from 'react-router-dom'; 


const Home = () => {
  const history = useHistory();

  
  function handleClick() {
    
    console.log("I am being clicked");

      const randomNumber = Math.ceil(Math.random()*819110);
      fetch(`https://api.themoviedb.org/3/movie/${randomNumber}?api_key=1e17d1ce4e262e481dcf01400724e434&language=en-US`)
      .then(response => response.json())
      .then(data => {
        if (data.success !== false && data.adult === false) {
          history.push(`/movies/${randomNumber}`)
        }
        else {
          handleClick();
        }
      })
  }

    return (
      <>
        <Hero text="What should I see?"/>
        <div className="home-container" style={{ backgroundImage: `url(${image})` }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 my-5">
              <p className="lead fw-bold mb-5 text-center">
                Feeling tired of choosing a movie to see? That is all over! Just click the button and trust us!
              </p>
                <button className="btn btn-outline-danger w-100 py-5 fs-1 bg-dark text-white" onClick={handleClick}>What should I see?</button>
            </div>
          </div>
        </div>
      </div>
      
      </>
    )
  }


  export default Home;
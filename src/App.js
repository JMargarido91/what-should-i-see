import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutView from './components/AboutView';
import SearchView from './components/SearchView';
import MovieView from './components/MovieView';
import { Route, Switch } from 'react-router';
import { useEffect, useState } from 'react';
import NotFoundPage from './components/NotFoundPage';
import Footer from './components/Footer';



function App() {

  const [searchResults, setSearchResults] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    if (searchText) {
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=1e17d1ce4e262e481dcf01400724e434&language=en-US&query=${searchText}&page=1&include_adult=false`)
      .then(response => response.json())
      .then(data => {
        setSearchResults(data.results);
      })
    }
  }, [searchText])



  return (
    <div className="page-container">
      <div className="content-wrap">
        <Navbar searchText={searchText} setSearchText={setSearchText} />

        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>

          <Route path="/about" component={AboutView} />
          <Route path="/search">
            <SearchView keyword={searchText} searchResults={searchResults} />
          </Route>
          <Route path="/movies/:id" component={MovieView} />

          <Route component={NotFoundPage} />
        </Switch>
      </div>

      <Footer />
    </div>
  );
}

export default App;

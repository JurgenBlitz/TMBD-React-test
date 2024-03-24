import React, {useState, useEffect} from 'react';
import { getPopularMovies } from './services/movies-service';
import { getPopularShows } from './services/tvshows-service';
import { Provider } from 'react-redux';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { store } from '../src/store';
import MainPage  from './pages/MainPage';
import DetailPage from './pages/DetailPage';
import './styles/App.scss';

export default function App() {

  const [loading, setLoading] = useState(true);
  // TODO: If there's enough time, refactor setters to be Redux accessors.
  const [moviesList, setMoviesList] = useState([]);
  const [showsList, setShowsList] = useState([]);

  useEffect(() => {
    getRequiredMedia();
  }, []);

  const getRequiredMedia = () => {
    return Promise.all([getPopularMovies(), getPopularShows()]).then((values: any) => {
      const moviesResult = values.find((value: any) => value.listType === 'movies');
      const showsResult = values.find((value: any) => value.listType === 'shows');
      if (moviesResult?.result?.length) {
        setMoviesList(moviesResult.result);
      }
      if (showsResult?.result?.length) {
        setShowsList(showsResult.result);
      }
      setTimeout(() => {
        setLoading(true);
      }, 500);
    });
  }


  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <p>TMBD Search App</p>
        </header>
        <Routes>
          <Route path="/" element={<MainPage moviesList={moviesList} showsList={showsList}/>}/>
          <Route path="/detail" Component={DetailPage} /> 
        </Routes>
      </div>
    </Provider>

  );
}

//export default App;

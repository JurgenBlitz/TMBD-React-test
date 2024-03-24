import React, {useState, useEffect} from 'react';
import { getPopularMovies } from './services/movies-service';
import { getPopularShows } from './services/tvshows-service';
import  MainPage  from './pages/MainPage';
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
      console.log('received values', values);
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
    <div className="App">
      <header className="App-header">
        <p>TMBD Search App</p>
      </header>
      <MainPage movieList={moviesList} showsList={showsList}/>
    </div>
  );
}

//export default App;

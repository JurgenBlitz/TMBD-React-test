import { HttpRequest } from '../interfaces/HttpRequest';
import { httpRequestHandler } from '../httpwrapper/http-wrapper';

export  const getPopularMovies = async () => {
  return new Promise((resolve, reject) => {
    const requestConfig: HttpRequest = {
      endpointUrl: `movies/popular`,
      method: 'GET',
      authRequired: true,
    }
    httpRequestHandler(requestConfig).then((res: any) => {
      const popularShowsData = {
        listType: 'movies',
        result: res.data
      }
      resolve(popularShowsData);
    }).catch((err) => {
      console.log('Error fetching popular movies:', err);
      reject();
    });
  });
}

export const fetchMovieDetail = async (movieId: number) => {
  return new Promise((resolve, reject) => {
    const requestConfig: HttpRequest = {
      endpointUrl: `movies/${movieId}`,
      method: 'GET',
      authRequired: true,
    }
    httpRequestHandler(requestConfig).then((res: any) => {
      resolve(res.data);
    }).catch((err) => {
      console.log('Error fetching popular movies:', err);
      reject();
    });
  });
}
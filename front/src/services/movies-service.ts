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
  })
}
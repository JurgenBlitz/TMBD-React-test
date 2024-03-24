import { HttpRequest } from '../interfaces/HttpRequest';
import { httpRequestHandler } from '../httpwrapper/http-wrapper';

export const getPopularShows = async () => {
  return new Promise((resolve, reject) => {
    const requestConfig: HttpRequest = {
      endpointUrl: `tv/popular`,
      method: 'GET',
      authRequired: true,
    }
    httpRequestHandler(requestConfig).then((res: any) => {
      const popularMoviesData = {
        listType: 'shows',
        result: res.data
      }
      resolve(popularMoviesData);
    }).catch((err) => {
      console.log('Error fetching popular movies:', err);
      reject();
    });
  });
}


export const fetchShowDetail = async (showId: number) => {
  return new Promise((resolve, reject) => {
    const requestConfig: HttpRequest = {
      endpointUrl: `tv/${showId}`,
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
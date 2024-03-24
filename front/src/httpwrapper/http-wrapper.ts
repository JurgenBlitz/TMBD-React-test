import { HttpRequest } from "../interfaces/HttpRequest";
import { movieDbUrl } from "../config/config-data";
import { V3_API_KEY } from "../config/config-data";
import { V3_AUTH_TOKEN } from "../config/config-data";

export const httpRequestHandler = async (request: HttpRequest) => {
  const fullUrl = `${movieDbUrl}/${request.endpointUrl}`
  try {
    let req = await fetch(fullUrl, {
      method: request.method,
      headers: setReqHeaders(request.authRequired)
    });
    if (request.method === 'POST' || 'PATCH') {
      req = await fetch(fullUrl, {
        method: request.method,
        body: JSON.stringify(request.body),
        headers: setReqHeaders(request.authRequired)
      });
    }
    if (request.responseBody === false) {
      return;
    }

    const jsonResp = await req.json();
    return jsonResp;

  } catch(error) {
    console.log(`Error on endpoint ${request.method} / ${fullUrl}`, error)
    return error;
  }
}

export const setReqHeaders = (authRequired: boolean): HeadersInit => {
  let reqHeaders: HeadersInit = new Headers();
  reqHeaders.set('Content-Type', 'application/json')
  reqHeaders.set( 'accept', 'application/json')
  if (authRequired) {
    reqHeaders.set('Authorization', `Bearer ${V3_AUTH_TOKEN}`)
  }
  return reqHeaders;
}

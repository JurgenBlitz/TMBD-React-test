export interface HttpRequest {
  endpointUrl: string;
  method: 'GET' | 'POST' | 'PATCH' | 'DELETE';
  authRequired: boolean; // Will determine if the 'Bearer' header is added or not.
  responseBody?: boolean;
  body?: any;
}

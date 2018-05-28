import * as fetch from 'isomorphic-fetch';
import { stringify } from 'query-string';

const getProps = {
  method: 'GET',
};


const fetchWrap = (path: any, props = getProps, query = '') => {
  const apiKey = '7d090866a4894c7d98ae9765422ec62e';
  const apiHost = 'https://newsapi.org/v2/top-headlines';
  
  let response: any;
  return fetch(`${apiHost}${path}?apiKey=${apiKey}&${query}`, props)
    .then((res: any) => {
      response = res
      return response.json();
    })
    .then((json: any) => {
      if (response.ok && json.status == 'ok') {
        return { response: json.message || json }
      } else {
        return { error: json.message || json }
      }
    })
    .catch((error: any) => {
      console.error('---api news fetch error: ', error)
      return { error: error }
    });
}

const fetchGET = (path: any, data: any) => {
  const query = stringify(data);
  return fetchWrap(path, getProps, query);
}

export const all = (data: any) => {
  return fetchGET('/', data);
}

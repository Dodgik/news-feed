//import fetch from 'isomorphic-fetch';
import { stringify } from 'query-string';


const getProps = {
  method: 'GET',
};


const fetchWrap = (path: any, props = getProps, query = '', apiParams: any) => {
  //const { apiHost, developer } = apiParams;
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

const fetchGET = (path: any, data: any, apiParams: any) => {
  const query = stringify(data);
  return fetchWrap(path, getProps, query, apiParams);
}

export const all = (data: any, apiParams: any) => {
  return fetchGET('/', data, apiParams);
}


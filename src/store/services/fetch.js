import 'isomorphic-fetch';

function callApi(endpoint, method, data) {
  const url = `http://localhost:3000/api/${endpoint}`;

  return fetch(url, {
    method,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then(response => response.json().then(json => ({ json, response })))
    .then(({ json, response }) => {
      if (!response.ok) {
        return Promise.reject(json);
      }

      return json;
    })
    .then(
      response => ({ response }),
      error => ({ message: error.message || 'Something bad happened' })
    );
}

export default callApi;

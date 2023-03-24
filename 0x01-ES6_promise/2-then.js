/* eslint-disable no-unused-vars */
/* const resolved = { status: 200, body: 'success' };

export default function handleResponseFromAPI(promise) {
  promise.then(() => resolved).catch((Error) => Error).finally(() => {
    console.log('Got a response from the API');
  });
} */
export default function handleResponseFromAPI(promise) {
  promise.then((result) => {
    console.log('Got a response from the API');
    const response = {
      status: 200,
      body: 'success',
    };
    return response;
  }).catch((error) => {
    console.log('Got a response from the API');
    return new Error();
  });
}

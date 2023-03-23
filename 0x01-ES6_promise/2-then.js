const trueBool = { status: 200, body: 'Success' };

export default function handleResponseFromAPI(promise) {
  promise.then((result) => {
    console.log('Got a response from the API');
    return result;
  }).catch((error) => {
    console.log('Got an error from the API');
    return error;
  });
}

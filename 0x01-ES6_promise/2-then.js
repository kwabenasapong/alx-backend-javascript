const resolved = { status: 200, body: 'success' };

export default function handleResponseFromAPI(promise) {
  promise.then(() => resolved).catch((Error) => Error).finally(() => {
    console.log('Got a response from the API');
  });
}

const resolved = { status: 200, body: 'success' };

export default function handleResponseFromAPI(promise) {
  return promise.then(() => resolved).catch(() => Error()).finally(() => {
    console.log('Got a response from the API');
  });
}

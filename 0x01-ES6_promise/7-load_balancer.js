export default function loadBalancer(chinaDownload, USDownload) {
  return new Promise((resolve) => {
    chinaDownload.then((value) => {
      resolve(value);
    });
    USDownload.then((value) => {
      resolve(value);
    });
  });
}

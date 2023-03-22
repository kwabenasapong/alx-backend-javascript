export default function createIteratorObject(report) {
  const iterator = [];
  for (const item of Object.values(report.allEmployees)) {
    for (const name of item) {
      iterator.push(name);
    }
  }
  return iterator;
}

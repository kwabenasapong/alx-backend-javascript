export default function getNeighborhoodsList() {
  this.sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];

  // const self = this;
  this.addNeighborhood = (neighborhood) => {
    this.sanFranciscoNeighborhoods.push(neighborhood);
    return this.sanFranciscoNeighborhoods;
  };
}

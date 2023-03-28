// export default function cleanSet(set, startString) {
//   if (startString !== undefined && startString.length !== 0 && typeof startString === 'string') {
//     const selected = [...set].filter((value) => value.startsWith(startString));
//     let finalStr = '';
//     for (const str of selected) {
//       const trucStr = str.replace(startString, '');
//       finalStr += `${trucStr}-`;
//     }
//     return finalStr.slice(0, -1);
//   }

//   return '';
// }
function cleanSet(set, startString) {
  if (startString === undefined || startString.length === 0 || typeof startString !== 'string') {
    return '';
  }
  let result = '';
  for (const value of set) {
    if (value.startsWith(startString)) {
      result += `-${value.substring(startString.length)}`;
    }
  }
  return result.substring(1);
}
export default cleanSet;

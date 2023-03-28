export default function cleanSet(set, startString) {
  if (startString) {
    const selected = [...set].filter((value) => value.startsWith(startString));
    let finalStr = '';
    for (const str of selected) {
      const trucStr = str.replace(startString, '');
      finalStr += `${trucStr}-`;
    }
    return finalStr.slice(0, -1);
  }

  return '';
}

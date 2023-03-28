export default function cleanSet(set, startString) {
  // eslint-disable-next-line max-len
  if (startString !== undefined && startString.length !== 0 && set.size !== 0 && startString.length <= set.size) {
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

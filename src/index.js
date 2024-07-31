module.exports = function reverse (n) {
  const arr = [...n.toString()];
  const [minus, ...number] = arr;
  if (minus === '-') {
    arr.shift();
  }
  return Number(arr.reverse().join(''));
};

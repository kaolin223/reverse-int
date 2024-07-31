module.exports = function reverse (n) {
  const arr = [...n.toString()];
  const [minus] = arr;
  if (minus === '-') {
    arr.shift();
  }
  return Number(arr.reverse().join(''));
};

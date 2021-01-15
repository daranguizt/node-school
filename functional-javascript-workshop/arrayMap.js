module.exports = function arrayMap(arr, fn) {
  return arr.reduce((accumulator, currentNum) => {
    let newNum = fn(currentNum);
    accumulator.push(newNum);
    return accumulator;
  }, [])
};

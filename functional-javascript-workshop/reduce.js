function countWords(inputWords) {
  return inputWords.reduce((accumulator, word) => {
    if (accumulator[word]) {
      accumulator[word]++;
    } else {
      accumulator[word] = 1;
    }
    return accumulator;
  }, {});
}

module.exports = countWords;

// //SOLUTION
// function countWords(arr) {
//   return arr.reduce(function (countMap, word) {
//     countMap[word] = ++countMap[word] || 1; // increment or initialize to 1
//     return countMap;
//   }, {}); // second argument to reduce initialises countMap to {}
// }

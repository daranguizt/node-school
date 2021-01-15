module.exports = function (namespace) {
  return console.log.bind(null, namespace);
};

// module.exports = function (namespace) {
//   return console.log.bind(console, namespace);
// };

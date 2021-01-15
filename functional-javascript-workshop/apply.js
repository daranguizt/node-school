var slice = Array.prototype.slice;

function logger(namespace) {
  return function partiallyApply() {
    var args = slice.call(arguments);
    args.unshift(namespace);
    console.log.apply(this, args);
  };
}

module.exports = logger;

// var slice = Array.prototype.slice;

// function logger(namespace) {
//   return function () {
//     console.log.apply(console, [namespace].concat(slice.call(arguments)));
//   };
// }

// module.exports = logger;

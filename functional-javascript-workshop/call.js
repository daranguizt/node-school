function duckCount() {
  return (function countQuack(args, ducks) {
    if (!args.length) {
      return ducks;
    }
    if (Object.prototype.hasOwnProperty.call(args[0], "quack")) {
      ducks++;
    }
    return countQuack(args.slice(1), ducks);
  })(Array.prototype.slice.call(arguments), 0);
}

module.exports = duckCount;

// function duckCount() {
//   return Array.prototype.slice.call(arguments).filter(function (obj) {
//     return Object.prototype.hasOwnProperty.call(obj, "quack");
//   }).length;
// }

// module.exports = duckCount;

const readFiles = require("./mymodule");

function processData(err, data) {
  if (err) console.log(err);
  else {
    data.forEach((element) => console.log(element));
  }
}

readFiles(process.argv[2], process.argv[3], processData);

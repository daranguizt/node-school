const fs = require("fs");

const readFiles = (directory, extension, callback) => {
  fs.readdir(directory, function (err, files) {
    if (err) return callback(err, null);

    let filteredFiles = [];
    files.forEach((file) => {
      let splittedFile = file.split(".");
      if (splittedFile.length > 1) {
        let ext = splittedFile.pop();
        if (ext === extension) filteredFiles.push(file);
      }
    });

    return callback(null, filteredFiles);
  });
};

module.exports = readFiles;

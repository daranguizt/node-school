const fs = require("fs");

fs.readdir(process.argv[2], function (err, files) {
  if (err) console.log(err);

  files.forEach((file) => {
    let splittedFile = file.split(".");
    if (splittedFile.length > 1) {
      let ext = splittedFile.pop();
      if (ext === process.argv[3]) console.log(file);
    }
  });
});


// 'use strict'
// const fs = require('fs')
// const path = require('path')

// const folder = process.argv[2]
// const ext = '.' + process.argv[3]

// fs.readdir(folder, function (err, files) {
//   if (err) return console.error(err)
//   files.forEach(function (file) {
//     if (path.extname(file) === ext) {
//       console.log(file)
//     }
//   })
// })

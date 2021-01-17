const fs = require('fs');

const file = fs.readFileSync(process.argv[2]);
console.log(file.toString().split('\n').length - 1);
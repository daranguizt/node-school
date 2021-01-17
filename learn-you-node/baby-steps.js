const nums = process.argv.slice(2);

console.log(nums.reduce((accumulator, num) =>{ return accumulator+= +num }, 0));
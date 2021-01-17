const http = require("http");

const getDataRecursive = (array, i) => {
  // Do async job

  http.get(array[i], (response) => {
    let allData = "";
    response.setEncoding("utf-8");
    response.on("data", (chunk) => {
      allData += chunk;
    });
    response.on("error", (err) => {
      console.log(err);
    });
    response.on("end", () => {
      console.log(allData);
      getDataRecursive(array, i+1);
    });
  });
};

getDataRecursive(process.argv, 2);


//

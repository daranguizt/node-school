const http = require('http');

http.get(process.argv[2], (response) => {
    let allData = "";
    response.on('data', (chunk) => {
        allData += chunk;
    })

    response.on('error', (err) => {
        console.log(err);
    })

    response.on('end', () => {
        console.log(allData.length);
        console.log(allData);
    })
});
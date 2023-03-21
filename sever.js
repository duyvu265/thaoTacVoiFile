const http = require('http');
const fs = require('fs');
let sever = http.createServer(function (req, res) {
    let dataFile = "";
    let html = "";
    fs.readFile("../data/data.json", "utf-8", function (err, str) {

        dataFile = str.split(",")
        dataFile.forEach((vale, index) => {
            html += '<tr>';
            html += `<td>${index + 1}</td>`
            html += `<td>${vale}</td>`
            html += `<td><button class="btn btn-danger">Delete</button></td>`
            html += '</tr>';
        });
    })

    fs.readFile("./indext.html", "utf-8", function (err, data) {
        res.writeHead(200,{"Content-type":"text/html"})
        data = data.replace('{list-user}', html);

        res.write(data);
        res.end();

    })
})
sever.listen(8080,"localhost",function () {
    console.log("sever running")
})
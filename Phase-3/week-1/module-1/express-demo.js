// //import the http library 
// const http = require('http');

// //create server 
// const server  = http.createServer()

// //event listener 
// server.on('request', (request, response) => {
//     console.log(request.url);
//     response.write(`<h1> Hello Class </h1>`);
// });

// server.listen(3000, 'localhost');

const express = require('express');
//server Object
const serverObj = express();

// when I get a get request at localhost:8080/ ==> <h1> Root
serverObj.get('/helloClass', (req, res) => {
    console.log(req);
    res.send(`<h1> Hello Class </h1>`)
})

serverObj.get('/user/me', (req, res) => {
    console.log(req.path);
    res.send(`<h1> This is Me </h1>`)
})

serverObj.listen(8080, () => {
    console.log("App has begun Listening")
})
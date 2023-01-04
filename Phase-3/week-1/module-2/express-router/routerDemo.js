const express = require('express');
const app = express(); 

//body parsing 
//HTTP Req 
//POST
/**
 * headers 
 *  body: JSON.stringify({
        user: {
            username: 'superman27',
            password: 'krypt0n0rbust'
        }
  })
 */

//req ==> user from body// user: {
        //     username: 'superman27',
        //     password: 'krypt0n0rbust'
        // }
// parse the json and put it as an object in req.body
app.use(express.json());


// app.use(express.static(path.join(__dirname, 'public')));

// GET /classes/1 ====> classes  

const classes = require('./class-router');
app.use('/classes', classes);

// app.get('/students', (req, res, next) => {
//       res.send(`<h1> This is the total student page </h1>`)
// })

// app.post('/students', (req, res, next) => {
//     console.log(req.body);
//     res.send(`<h1> I have posted ${req.body.studentName} to the page </h1>`)
// })  

// app.get('/students/:studentID', (req, res, next) => {
//       res.send(`<h1> This is student ${req.params.studentID} page </h1>`)
// })

// app.use((req, res, next) => {
//     console.log(1);
//     req.testing = "Whatever"
//     next();
// });    

// app.use((req, res, next) => {
//     res.send("HEllo")
//     next();
// });    


// app.use((req, res, next) => {
//     res.send("Another")
//     next();
// });    

app.listen(3001, () => {
    console.log("Listening NOW")
}); 
// Stuff to look into 
// Express Error Handling 
// Express 404 handling
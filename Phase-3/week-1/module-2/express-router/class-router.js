
const express = require('express'); 
const router = express.Router();

//okay start with /classes and look at the url after it 
//==> url /classes

router.get('/', (req, res, next) => {
    res.send(`<h1> This is the total class page </h1>`)
})

router.post('/', (req, res, next) => {
    console.log(req.body);
    res.send(`<h1> posted to Classes </h1>`)
})

router.get('/:classID', (req, res, next) => {
    res.send(`<h1> This is the class  ${req.params.classID} page </h1>`)
});

module.exports = router;
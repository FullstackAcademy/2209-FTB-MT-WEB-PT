- Review 
- Express.Router
- REST 
- Body Parser

https://github.com/brenmeyer2245/shatteredsandsdist/tree/master/server
# Express Router 
- Intent => We're trying to make our code more modular 
- Module => A chunk of code that can be defined in one file and imported/exported to other files 
- How do we move our routes outside of server/index.js 
    - How can we breakdown routes and files into modules?
- Use the same express server object within different files
- Links route handlers in a given file to our overall express server app in server/index.js 

- app.use('/class', require('./class'));

in './class' 
const router = require('express').Router()
module.exports = router

router.get('/', () => )
router.get('/class', => )


REST 
HTTP VERB of what you want to do 
/classification of resource you want to interact with / id for specific resource 


The express.json() function is a built-in middleware function in Express. It parses incoming requests with JSON payloads and is based on body-parser.
-  app.use(express.json())

Coming from a form, Forms send out info through a URL 
RECEIVE FORM data 
-  app.use(express.urlencoded({extended: true}))

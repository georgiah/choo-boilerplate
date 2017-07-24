// require dependencies
var choo = require('choo')
var html = require('choo/html')
var css = require('sheetify')

// initialise app
var app = choo()

// declare state
app.use(require('./state'))

// declare routes
app.route('/', require('./templates/home'))

// start app
document.body.appendChild(app.start())

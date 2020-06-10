const validator = require('validator')

const myNotes = require('./notes')

const msg = myNotes()

console.log(myNotes())

console.log(validator.isURL('htp/example.com'))
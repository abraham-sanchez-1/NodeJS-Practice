const chalk = require('chalk')

const myNotes = require('./notes')

const importantGreen = chalk.green.inverse.bold

const msg = myNotes()

console.log(msg)

console.log(importantGreen('Success!')) 
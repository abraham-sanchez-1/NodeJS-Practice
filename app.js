const chalk = require('chalk')
const yargs = require('yargs')
const myNotes = require('./notes')

//Customized yargs vesion

yargs.version('1.1.0')

//Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    handler: function() {
        console.log('Adding new note!')
    }
})

//Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function() {
        console.log('Removing the note!')
    }
})


//Create list command
yargs.command({
    command: 'list',
    describe: 'List of notes',
    handler: function() {
        console.log('Listing all notes!')
    }
})


//Create read command
yargs.command({
    command: 'read',
    describe: 'Reading notes',
    handler: function() {
        console.log('Reading notes!')
    }
})

//add, remove, list, read

console.log(yargs.argv)
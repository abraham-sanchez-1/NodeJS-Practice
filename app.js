const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes')

//Customized yargs vesion
yargs.version('1.1.0')

//Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Body of note',
            demandOption: true,
            type: 'string',
        }
    },
    handler: function(argv) {
        notes.addNote(argv.title, argv.body)
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
    describe: 'Read a note',
    handler: function() {
        console.log('Reading a note!')
    }
})

//add, remove, list, read

yargs.parse()

//console.log(yargs.argv)
const chalk = require('chalk')
const fs = require('fs')

const success = chalk.green.inverse
const error = chalk.red.inverse


const getNotes = function() {
    return "Your notes..."
}
 
const addNote = function(title, body) {
    const notes = loadNotes()

    const duplicateNotes = notes.filter(function(note) {
        return note.title === title
    })

    if(duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body:body
        })
    
        saveNotes(notes)
        console.log(success('New note added!'))
    } else {
        console.log(error('Note title already exists!'))
    }

    
}

const removeNote = function(title) {
    const notes = loadNotes()

    const duplicateNotes = notes.filter(function(note) {
        return note.title !== title
    })

    if (duplicateNotes.length === notes.length) {
        console.log(error('This title does not exist, try again!'))
    } else {

        saveNotes(duplicateNotes)
        console.log(success('Removed ' + title + ' from app!'))
    }
    
    
}

const saveNotes = function(notes) {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = function() {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (error) {
        return []
    }
   
}


module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
}
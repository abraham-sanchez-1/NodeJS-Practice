const chalk = require('chalk')
const fs = require('fs')

const success = chalk.green.inverse
const error = chalk.red.inverse


const getNotes = () => {
    return "Your notes..."
}
 
const addNote = (title, body) => {
    const notes = loadNotes()

    const duplicateNotes = notes.filter((note) => note.title === title)

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

const removeNote = (title) => {
    const notes = loadNotes()

    const duplicateNotes = notes.filter((note) => note.title !== title)

    if (duplicateNotes.length === notes.length) {
        console.log(error('This title does not exist, try again!'))
    } else {

        saveNotes(duplicateNotes)
        console.log(success('Removed ' + title + ' from app!'))
    }
    
    
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
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
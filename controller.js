const tag = 'Romanian'

const notes = data.notes
  .filter(note => note.tags.indexOf(tag) > -1)
  .map(note => ({front: note.fields[0], back: note.fields[1]}))

const getRandom = (myList) => myList[Math.floor(Math.random() * myList.length)]

let note1 = getRandom(notes)
let note2 = getRandom(notes)
let note3 = getRandom(notes)

const printAtId = (id, s) => document.getElementById(id).innerHTML = s

const printNotes = (field = 'front') => {
  printAtId('note1', note1[field])
  printAtId('note2', note2[field])
  printAtId('note3', note3[field])
}

printNotes()

const showBack = () => {
  printNotes('back')
}
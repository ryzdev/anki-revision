
const tag = 'Romanian'

const notes = data.notes
  .filter(note => note.tags.indexOf(tag) > -1)
  .map(note => ({front: note.fields[0], back: note.fields[1]}))

const getRandom = (myList) => myList[Math.floor(Math.random() * myList.length)]

const printAtId = (id, s) => document.getElementById(id).innerHTML = s

const next = () => {
  printAtId('note1', getRandom(notes).front)
  printAtId('note2', getRandom(notes).front)
  printAtId('note3', getRandom(notes).front)
}

next()

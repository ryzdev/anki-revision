const query = window.location.search.split('=')
const tag = query.length > 1 ? query[1] : ''

const notes = data.notes
  .filter(note => note.tags.indexOf(tag) > -1)
  .map(note => ({front: note.fields[0], back: note.fields[1]}))

const getRandom = (myList) => myList[Math.floor(Math.random() * myList.length)]
const printAtId = (id, s) => document.getElementById(id).innerHTML = s

let note1
let note2
let note3
let backVisible

const reset = () => {
  note1 = getRandom(notes)
  note2 = getRandom(notes)
  note3 = getRandom(notes)
  backVisible = false
  printNotes()
}

const printNotes = (field = 'front') => {
  printAtId('note1', note1[field])
  printAtId('note2', note2[field])
  printAtId('note3', note3[field])
}

const showAnswerOrReset = () => {
  if (!backVisible) {
    printNotes('back')
    backVisible = true
  } else {
    reset()
  }
}

document.addEventListener('keydown', (event) => {
  if (event.keyCode === 32 ){
    showAnswerOrReset()
  }
})

reset()

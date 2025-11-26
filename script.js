const addBtn = document.querySelector('.add-btn');
const deleteModalBtn = document.querySelector('.delete-modal');
const deleteNoteBtn = document.querySelector('.delete-note-btn');
const notesContainer = document.querySelector('.notes-container')
const modalOverlay = document.querySelector('.modal-overlay');
const modalDeleteOverlay = document.querySelector('.modal-overlay-delete');
const modalDeletMsg = document.querySelector('.modal-delete-msg');
const addNoteForm = document.getElementById('form-add-note');
const radios = document.querySelectorAll('input[name="noteType"]');
const allOptions = document.querySelectorAll('option');
const selectNotes = document.getElementById('selectNotes');
const searchInput = document.getElementById('searchInput');

selectNotes.addEventListener('click',()=>{
  const selectedType = selectNotes.value;
  displaySelectedNotes(selectedType);
  // console.log(filtredData);
  // reBuildNotesContainer(filtredData);
});

searchInput.addEventListener('keyup',(e)=>{
  console.log(e.target.value);
  const allnoteCards = document.querySelectorAll('.note-card');
  allnoteCards.forEach(card =>{
    if(card.innerText.includes(e.target.value)){
      card.style.display = 'flex';
    }else{
      card.style.display = 'none';
    }
  })
})

function displaySelectedNotes(value){
  //let filtredData = [];
  const allnoteCards = document.querySelectorAll('.note-card');
  allnoteCards.forEach(card=>{
    if(value === 'all' || card.classList.contains(value)){
      card.style.display = 'flex';
    }else{
      card.style.display = 'none';
    }
  })

  // allnoteCards.forEach(card=>{
  //   if(card.classList.contains(value)){
  //     filtredData.push(card.innerHTML.trim().replace(/\n\s*/g, ''));
  //   }
  // })
  // return filtredData;
}

// function reBuildNotesContainer(filtredData){
//   filtredData.forEach((filteredCode)=>{
//     notesContainer.innerHTML += `
//       <div class="note-card">
//         ${filteredCode}
//       </div>
//     `;
//   })
// }

const now = new Date();
const myCurrentDate = now.toLocaleDateString();
const myCurrentTime = now.toLocaleTimeString();
console.log(`${myCurrentDate} ${myCurrentTime}`);

console.log(addNoteForm);

// console.log(radios);
// radios.forEach((radio)=>{
//   radio.addEventListener('change',()=>{
//     if(radio.checked){
//       console.log(radio.value);
//     }
//   })
// });

//MyNote class to creat note object
class MyNote{
  constructor(title,content,type,date,id){
    this.title = title;
    this.content = content;
    this.type = type;
    this.date = date;
    this.id = id
  }
}

let notes = getNotesInLocal();

addNoteForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    addMyNote();
    notes = getNotesInLocal();
    displayNote(notes);
});


document.addEventListener('DOMContentLoaded',()=>{
  notes = getNotesInLocal();
  displayNote(notes)
});

function addMyNote(){
  const title = document.getElementById('noteTitle').value;
  const content = document.getElementById('noteContent').value;

  let typeChoice = '';
  const selectedRadio = document.querySelector('input[name="noteType"]:checked');
  if (selectedRadio) {
    typeChoice = selectedRadio.value;
  }
  const type = typeChoice;

  const date = `${myCurrentDate} ${myCurrentTime}`;
  const id = crypto.randomUUID();

  const mynote = new MyNote(title,content,type,date,id);

  notes.push(mynote);
  clearFields();
  saveNotesToLocal(notes);
  getNotesInLocal();
  modalOverlay.classList.remove('active');
  //console.log(mynote)
}

function saveNotesToLocal(notes){
  localStorage.setItem('myNotes',JSON.stringify(notes));
}

// localStorage.clear()
function getNotesInLocal(){
  const storedNotes = localStorage.getItem('myNotes')
  return storedNotes ? JSON.parse(storedNotes) : []
}

function deleteNoteInLocal(idCard){
  const storedNotes = getNotesInLocal();
  storedNotes.forEach((element,index)=>{
    if(element.id === idCard){
      storedNotes.splice(index,1)
    }
  });
  saveNotesToLocal(storedNotes);
}

function displayNote(notes){
  notesContainer.innerHTML = '';
  notes.forEach(mynote=>{
    const icons = ["fa-user","fa-lightbulb","fa-bell","fa-briefcase"];
    const noteCard = document.createElement('div');
    noteCard.classList.add('note-card');
    noteCard.innerHTML = `
      <button class="delete-note-btn">
        <i class="fa-solid fa-trash delete-note"></i>
      </button>
      <div class="note-card-title">${mynote.title}</div>
      <div class="note-content">${mynote.content}</div>
      <div class="card-infos">
        <div class="card-type">
          <i class="fa-solid"></i> ${mynote.type}
        </div>
        <div class="card-date">${mynote.date}</div>
      </div>
      <div class="note-id">${mynote.id}</div>
    `;
    let myNoteTypeLower = mynote.type.toLowerCase();
    const typeCard = noteCard.querySelector('.card-type')
    const noteTypeIcon = typeCard.querySelector('.fa-solid');
    
    if(myNoteTypeLower === 'personal'){
      noteTypeIcon.classList.add(icons[0]);
    }else if(myNoteTypeLower === 'idea'){
      noteTypeIcon.classList.add(icons[1]);
    }else if(myNoteTypeLower === 'reminder'){
      noteTypeIcon.classList.add(icons[2]);
    }else if(myNoteTypeLower === 'work'){
      noteTypeIcon.classList.add(icons[3]);
    }
    
    typeCard.classList.add(`${myNoteTypeLower}-card`);
    noteCard.classList.add(`${myNoteTypeLower}`);
    notesContainer.appendChild(noteCard);
  })
}

function clearFields(){
  document.getElementById('noteTitle').value = '';
  document.getElementById('noteContent').value = '';
  const allRadios = document.querySelectorAll('input[type="radio"]');
  allRadios.forEach(radio => radio.checked = false);
}

//code to manage the modalOverlay for ADD NOTE
addBtn.addEventListener('click',()=>{
  modalOverlay.classList.add('active');
});

deleteModalBtn.addEventListener('click',()=>{
  modalOverlay.classList.remove('active');
})

window.addEventListener('click',(e)=>{
  if(e.target === modalOverlay){
    modalOverlay.classList.remove('active');
  }
});


//code to manage the modalOverlay for DELETE NOTE
notesContainer.addEventListener('click',(e)=>{
  if(e.target.classList.contains('delete-note')){
    modalDeleteOverlay.classList.add('active');
    const currentCard = e.target.parentElement.parentElement;
    const currentId = currentCard.querySelector('.note-id')
    const idCard = currentId.innerText
    confirmOrCancel(e,idCard);
    // console.log(currentCard);
    //console.log(idCard);
  }
});

function confirmOrCancel(event,idCard){
  modalDeletMsg.addEventListener('click',(e)=>{
    if(e.target.classList.contains('cancel')){
      modalDeleteOverlay.classList.remove('active');
      //nothing happing 
    }else{
      modalDeleteOverlay.classList.remove('active');
      //here we include code to delete note
      deleteNoteInLocal(idCard);
      deleteNote(event)
    }
  });
}


function deleteNote(event){
  event.target.parentElement.parentElement.remove();
}


// console.log(notes);

// const studentObj = {
//  name : "Jack",
//  lastName : "Khan",
//  email : "jackKhan@example.com",
//  cell: "703-123-2398"
// }

// localStorage.setItem("student",JSON.stringify(studentObj))

// let val = localStorage.getItem("student")

// localStorage.removeItem("student")
// localStorage.clear();







const addBtn = document.getElementById('add')

const notes = JSON.parse(localStorage.getItem('notes'))


if(notes){
  notes.forEach(note =>addNewNote(note) );
}


addBtn.addEventListener('click',()=> addNewNote())

// localStorage in broswer


function addNewNote(text =''){
const note = document.createElement('div')
note.classList.add('note')

note.innerHTML = ` 
  <div>
    <button class="edit">Edit📝</button>
  <button class="delete">Delte❌</button>
       <div class="main ${text ? "" : "hidden"}"></div>
      <textarea class="${text ? "hidden" : ""}"></textarea>
   </div>

`

const editBtn = note.querySelector('.edit')
const deleteBtn = note.querySelector('.delete')
const main = note.querySelector('.main')
const textArea = note.querySelector('textarea')

textArea.value = text;
main.innerHTML = text

deleteBtn.addEventListener('click',()=>{
  note.remove();
  // Todo update the locaalStoreage 
  updateLocalStorage();
})

editBtn.addEventListener('click',()=>{
  main.classList.toggle('hidden')
  textArea.classList.toggle('hidden')
})

textArea.addEventListener('input',(e)=>{
  const value = e.target.value;
  main.innerHTML = value
    // Todo update the locaalStoreage 
    updateLocalStorage();
})


document.body.appendChild(note)


}


function updateLocalStorage(){

  const noteText = document.querySelectorAll("textarea")

  const notes = [];

  noteText.forEach( note =>notes.push(note.value) )

  localStorage.setItem('notes',JSON.stringify(notes))
}



const addBtn = document.getElementById('add')

let name = 'Kahalida'



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
main.innerHTML = marked(text)

deleteBtn.addEventListener('click',()=>{
  note.remove();
  // Todo update the locaalStoreage 
})

editBtn.addEventListener('click',()=>{
  main.classList.toggle('hidden')
  textArea.classList.toggle('hidden')
})

textArea.addEventListener('input',(e)=>{
  const value = e.target.value;
  main.innerHTML = marked(value)
    // Todo update the locaalStoreage 
})


document.body.appendChild(note)


}


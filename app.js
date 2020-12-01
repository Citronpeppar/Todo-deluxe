const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input');
const language = document.querySelector('.language');
const todo = document.querySelector('.todo');



const generateTemplate = todo => {

  const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
      <span>${todo}</span>
      <i class="far fa-trash-alt delete"></i>
    </li>
  `;

  list.innerHTML += html;
};

//add translated text to title

todo.innerHTML = `
<h1 class="mb-4">${Svenska}</h1>  
`;



addForm.addEventListener('submit', e => {

  e.preventDefault();
  const todo = addForm.add.value.trim();

  if(todo.length){
    generateTemplate(todo);
    addForm.reset();
  };
  
});

//delete todos

list.addEventListener('click' , e => {

  if(e.target.classList.contains('delete')) {
    e.target.parentElement.remove();
  };
});

const filterTodos = (term) => {
  Array.from(list.children)
    .filter( (todo) => !todo.textContent.includes(term))
    .forEach((todo) => todo.classList.add('filtered'));
};


// keyup event

search.addEventListener('keyup', () => {
  const term = search.value.trim();
  filterTodos(term);
});
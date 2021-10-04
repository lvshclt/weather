//form
const $toDoForm = document.querySelector('#todo-form');
//input
const $toDoInput = $toDoForm.querySelector('input');
//ul
const $toDoList = document.querySelector('#todo-list');

const TODOS_KEY = 'todos';

let toDos = [];

const savedToDos = JSON.parse(localStorage.getItem(TODOS_KEY));

const saveToDos = () => {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
};

const deleteLi = (clickEventObject) => {
  const $selectedLi = clickEventObject.target.parentElement;
  toDos = toDos.filter((v) => v.id !== parseInt($selectedLi.id));
  saveToDos();
  $selectedLi.remove();
};

const drawToDo = (newToDoObj) => {
  const $li = document.createElement('li');
  const $span = (document.createElement('span').innerText = newToDoObj.text);
  const $button = document.createElement('button');
  $li.id = newToDoObj.id;
  $button.innerText = 'X';
  $li.append($span);
  $li.append($button);
  $toDoList.append($li);
  $button.addEventListener('click', deleteLi);
};

const onToDoSubmit = (e) => {
  e.preventDefault();
  const newToDo = $toDoInput.value;
  $toDoInput.value = '';
  const newTodoObj = {
    text: newToDo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  drawToDo(newTodoObj);
  saveToDos();
};

$toDoForm.addEventListener('submit', onToDoSubmit);

savedToDos &&
  savedToDos.forEach((v) => {
    toDos = savedToDos;
    console.log(v);
    drawToDo(v);
  });

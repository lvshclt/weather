const $notToDoForm = document.querySelector('#notToDo-form');
const $notToDoInput = $notToDoForm.querySelector('input');
const $notToDoUl = document.querySelector('#notToDo-list');

//localstorage 에 ,
// 배열을 넣으면, 배열의 원소들전체를 string으로 한 뒤, key의 value로 넣는 다.
// 마치 [1,2,3,4,..].join() 해서 '1,2,3'으로 만든뒤 value로들어감

const NOTTODO_KEY = 'notToDo';

let notToDoArr = [];

const onSubmitNotToDoForm = (e) => {
  e.preventDefault();
  const value = $notToDoInput.value;
  $notToDoInput.value = '';
  notToDoArr.push(value);
  localStorage.setItem(NOTTODO_KEY, notToDoArr);
  drawNotToDo(value);
  console.log('추가함');
  console.log(notToDoArr, localStorage);
};

const deleteNotToDoLi = (e) => {
  $notToDoUl.innerHTML = '';
  const target = e.target.parentElement.firstChild.innerText;
  notToDoArr = notToDoArr.filter((v) => target !== v);
  localStorage.setItem(NOTTODO_KEY, notToDoArr);
  notToDoArr.forEach((v) => drawNotToDo(v));
  console.log('한개 제거함');
  console.log(notToDoArr, localStorage);
};
const drawNotToDo = (value) => {
  const $notLi = document.createElement('li');
  const $notSpan = document.createElement('span');
  $notSpan.innerText = value;
  const $notBtn = document.createElement('button');
  $notBtn.innerText = 'X';
  $notLi.append($notSpan);
  $notLi.append($notBtn);
  $notToDoUl.append($notLi);
  $notBtn.addEventListener('click', deleteNotToDoLi);
};

if (localStorage.getItem(NOTTODO_KEY)) {
  notToDoArr = localStorage.getItem(NOTTODO_KEY).split(',');
  notToDoArr.forEach((v) => {
    drawNotToDo(v);
  });
  console.log('로드됨, localstorage있음. 아래는 그걸 []로가지고온거');
  console.log(notToDoArr);
} else {
  console.log('local storage비어있음');
}

$notToDoForm.addEventListener('submit', onSubmitNotToDoForm);

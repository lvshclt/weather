const $loginForm = document.querySelector('#login-form');
const $loginInput = $loginForm.querySelector('input');
const $loginButton = document.querySelector('#login-form button');
const $greeting = document.querySelector('#greeting');

const HIDDEN_CLASSNAME = 'hidden'; //자주쓰는 string을 변수로 선언하면 오타실수 방지 가능
const USERNAME_KEY = 'userName';
let savedUserName = localStorage.getItem(USERNAME_KEY);

const paintGreetings = (aaa) => {
  savedUserName = localStorage.getItem(USERNAME_KEY);
  $greeting.classList.remove(HIDDEN_CLASSNAME);
  $greeting.innerHTML = `Hello ${aaa}`;
};

const onSubmitForm = (e) => {
  e.preventDefault();
  $loginForm.classList.add(HIDDEN_CLASSNAME);
  const userName = $loginInput.value;
  localStorage.setItem(USERNAME_KEY, userName);
  paintGreetings(userName);
};

if (!savedUserName) {
  $loginForm.classList.remove(HIDDEN_CLASSNAME);
  $loginForm.addEventListener('submit', onSubmitForm);
} else {
  paintGreetings(savedUserName);
}

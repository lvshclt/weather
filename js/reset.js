const $reset = document.querySelector('#reset');

const reset = () => {
  localStorage.removeItem('todos');
  localStorage.removeItem('userName');
  localStorage.removeItem('notToDo');
  window.location.reload();
};
$reset.addEventListener('click', reset);

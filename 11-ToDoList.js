const todoList = JSON.parse(localStorage.getItem('todoList')) || [];

renderTodolist();

// ✅ Splash screen logic (runs once on page load)
window.addEventListener('load', () => {
  setTimeout(() => {  
    document.getElementById('splash').style.display = 'none';
    document.getElementById('main-content').style.display = 'block';
  }, 1000);
});

function renderTodolist() {
  let todoListHTML = '';
  for (let i = 0; i < todoList.length; i++) {
    const name = todoList[i].name;
    let date = todoList[i].date;
    date = date.split("-").reverse().join("-");

    const html = `
      <div>${name}</div>
      <div>${date}</div>
      <div><button onclick="deleteTodo(${i})"; class ="delete-button">Delete</button></div>
    `;
    todoListHTML += html;
  }

  document.querySelector('.output').innerHTML = todoListHTML;
}

function deleteTodo(index) {
  todoList.splice(index, 1);
  localStorage.setItem('todoList', JSON.stringify(todoList));
  renderTodolist();
}

function addTodo() {
  const inputElement = document.querySelector('.inputBox');
  const dueDate = document.querySelector('.inputDate');

  const name = inputElement.value.trim();
  const date = dueDate.value;

  if (name && date) {
    todoList.push({ name, date });
    localStorage.setItem('todoList', JSON.stringify(todoList));
    renderTodolist();
  }

  inputElement.value = '';
  dueDate.value = '';
}

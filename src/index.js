import './style.css';
import { format, getDay, isFuture, isPast, compareAsc, isToday, isYesterday } from 'date-fns';

const content = document.getElementById('content');
const mainInbox = document.querySelector('.main-inbox');
const homeBtn = document.querySelector('.btn-home');
const docTodayInbox = document.querySelector('.today-inbox');
const docPriorityInbox = document.querySelector('.priority-inbox');

let projects = [];
let currentProject = 'This'
let todoList = [];
let overDueList = [];
let todayList = [];
let futureList = [];
let priorityList = [];
const today = new Date();

todoList.push(createTodo("Matthew's Birthday", "", 9, 0, 1998, '4', ''));
todoList.push(createTodo("Xio's Birthday", "She's young", 11, 3, 2001, '1', ''));
todoList.push(createTodo("Today", 'today card', 30, 11, 2022, '4', ''));
todoList.push(createTodo('you?', 'this is a todo', 8, 3, 2200, '3', ''));
todoList.push(createTodo('are', 'this is a todo', 7, 4, 2042, '2', ''));
todoList.push(createTodo('how', 'this is a todo', 6, 5, 2023, '3', ''));

projects.push(project('This'));
projects.push(project('Project'));

todoList.push(createTodo('Test', 'Project Test', 31, 11, 2022, '4', projects[0].projID));
todoList.push(createTodo('Test', 'Project Test', 31, 10, 2022, '4', projects[1].projID));

function inbox() {
  content.innerHTML = '';

  const inboxTitleBox = document.createElement('div');
  const inboxTitle = document.createElement('h2');
  const date = document.createElement('span');

  inboxTitleBox.classList.add('inbox-title-box');
  inboxTitle.classList.add('inbox-title');

  inboxTitle.textContent = 'Inbox ';
  date.classList.add('date');
  date.textContent = format(today, 'EEE, MMM dd');

  inboxTitle.appendChild(date);
  inboxTitleBox.appendChild(inboxTitle);

  content.appendChild(inboxTitleBox);
  if (overDueList.length > 0) {
    content.appendChild(overDueTodo());
  }
  if (todayList.length > 0) {
    content.appendChild(todayTodo());
  }
  if (futureList.length > 0) {
    content.appendChild(futureTodo());
  }
}

function todayInbox() {
  content.innerHTML = '';

  if (todayList.length > 0) {
    content.appendChild(todayTodo());
    const heading = document.querySelector('.heading');
    heading.classList.add('inbox-title');
  } else {
    content.appendChild(emptyInbox());
  }
}

function priorityInbox() {
  content.innerHTML = '';

  if (priorityList.length > 0) {
    content.appendChild(priorityTodo());
    const heading = document.querySelector('.heading');
    heading.classList.add('inbox-title');
  } else {
    content.appendChild(emptyInbox());
  }
}

function overDueTodo() {
  const overDueBox = document.createElement('div');
  const heading = document.createElement('h3');
  const overDueInbox = document.createElement('div');

  overDueBox.classList.add('inbox');
  heading.classList.add('heading');
  heading.textContent = 'Overdue';
  overDueList.forEach(todo => overDueInbox.appendChild(todoCard(todo)));

  overDueBox.appendChild(heading);
  overDueBox.appendChild(overDueInbox);
  return overDueBox;
}

function emptyInbox() {
  const emptyBox = document.createElement('h3');
  emptyBox.classList.add('inbox-title');
  emptyBox.textContent = 'Nothing in this inbox, enjoy your day!';
  return emptyBox;
}

function todayTodo() {
  const todayBox = document.createElement('div');
  const heading = document.createElement('h3');
  const todayDate = document.createElement('span');
  const todayInbox = document.createElement('div');

  todayBox.classList.add('inbox');
  heading.classList.add('heading');
  heading.textContent = `Today `;
  todayDate.classList.add('date');
  todayDate.textContent = `${format(today, 'EEE, MMM dd')}`;
  heading.appendChild(todayDate);
  todayList.forEach(todo => todayInbox.appendChild(todoCard(todo)));

  todayBox.appendChild(heading);
  todayBox.appendChild(todayInbox);
  return todayBox;
}

function futureTodo() {
  const futureBox = document.createElement('div');
  const heading = document.createElement('h3');
  const futureInbox = document.createElement('div');

  heading.classList.add('heading');
  heading.textContent = 'Future Due';
  futureList.forEach(todo => futureInbox.appendChild(todoCard(todo)));

  futureBox.appendChild(heading);
  futureBox.appendChild(futureInbox);
  return futureBox;
}

function priorityTodo() {
  const priorityBox = document.createElement('div');
  const heading = document.createElement('h3');
  const priorityInbox = document.createElement('div');

  heading.classList.add('heading');
  heading.textContent = 'Priority Inbox';
  priorityList.forEach(todo => priorityInbox.appendChild(todoCard(todo)));

  priorityBox.appendChild(heading);
  priorityBox.appendChild(priorityInbox);
  return priorityBox;
}

function todoCard(todo) {
  const todoCardEl = document.createElement('div');
  const title = document.createElement('p');
  const desc = document.createElement('p');
  const dueDate = document.createElement('p');
  const project = document.createElement('p');

  todoCardEl.addEventListener('click', removeTodo);

  todoCardEl.classList.add('todo-card');
  todoCardEl.classList.add(`priority-${todo.priority}`);
  todoCardEl.dataset.project = todo.type;
  todoCardEl.dataset.value = todo.title;

  title.classList.add('todo-title');
  desc.classList.add('todo-desc');

  dueDate.classList.add('todo-due-date');
  project.classList.add('todo-due-date');

  title.textContent = todo.title;
  desc.textContent = todo.desc;
  dueDate.textContent = format(todo.dueDate, 'MMM dd, yyyy');
  project.textContent = todo.type;

  todoCardEl.appendChild(title);
  todoCardEl.appendChild(desc);
  todoCardEl.appendChild(dueDate);
  todoCardEl.appendChild(project);

  return todoCardEl;
}

function project(projID) {

  return {
    projID,
  }
}

function projectInbox() {
  const workingList = todoList.filter(todo => todo.type === currentProject);
  const projectBox = document.createElement('div');
  const heading = document.createElement('h3');
  const projectInbox = document.createElement('div');

  heading.classList.add('heading');
  heading.textContent = currentProject;

  workingList.forEach(todo => projectInbox.appendChild(todoCard(todo)));
  
  projectBox.appendChild(heading);
  projectBox.appendChild(projectInbox);
  content.appendChild(projectBox);
}

function createTodo(title, desc, day, mon, year, priority, type) {
  let dueDate = today;

  if (day != '') {
    dueDate = new Date(year, mon, day);
  }

  type === '' ? type = 'inbox' : type = type;

  return {
    title,
    desc,
    dueDate: dueDate,
    priority,
    type,
  };
}

function addTodoModal() {
  const modal = document.createElement('div');
  const form = document.createElement('form');

  modal.classList.add('modal');
  form.classList.add('todo-form');

  const titleBox = document.createElement('div');
  const titleInput = document.createElement('input');

  titleBox.classList.add('modal-box');
  titleBox.classList.add('modal-box-title');
  titleInput.classList.add('modal-title');

  titleInput.setAttribute('placeholder', 'Title');
  titleInput.onkeyup = enableDisable;

  titleBox.appendChild(titleInput);

  const descBox = document.createElement('div');
  const descInput = document.createElement('input');

  descBox.classList.add('modal-box');
  descBox.classList.add('modal-box-desc');
  descInput.classList.add('modal-desc');

  descInput.setAttribute('placeholder', 'Description');

  descBox.appendChild(descInput);

  const dateBox = document.createElement('div');
  const dateInput = document.createElement('input');

  dateBox.classList.add('modal-box');
  dateInput.classList.add('modal-date');

  dateInput.type = 'date';

  dateInput.onkeyup = enableDisable;

  dateBox.appendChild(dateInput);

  const btnBox = document.createElement('div');
  const submitBtn = document.createElement('button');
  const cancelBtn = document.createElement('button');

  submitBtn.classList.add('submit-btn');
  cancelBtn.classList.add('cancel-btn');

  submitBtn.type = 'button';
  cancelBtn.type = 'button';

  submitBtn.disabled = true;

  submitBtn.textContent = 'Add Task';
  cancelBtn.textContent = 'Cancel';

  submitBtn.addEventListener('click', addTodo);

  function enableDisable() {
    if (titleInput.value.trim() != '') {
      submitBtn.disabled = false;
    } else {
      submitBtn.disabled = true;
    }
  }

  btnBox.appendChild(cancelBtn);
  btnBox.appendChild(submitBtn);

  form.appendChild(titleBox);
  form.appendChild(descBox);
  form.appendChild(dateBox);
  form.appendChild(btnBox);

  modal.appendChild(form);

  content.appendChild(modal);
}

function addTodo() {
  const title = document.querySelector('.modal-title').value;
  const desc = document.querySelector('.modal-desc').value;
  const date = document.querySelector('.modal-date').value;
  // const priority = document.querySelector('.modal-priority').value;
  // const projLocation = document.querySelector('.modal-project').value;

  let day = '';
  let mon = '';
  let year = '';

  if (date != '') {
    [year, mon, day] = date.split('-');
  } 
  
  todoList.push(createTodo(title, desc, day, mon, year, '4', ''));
  updateTodoLists();
}

function removeTodo() {
  const index = todoList.findIndex(todo => todo.title === this.dataset.value);
  todoList.splice(index, 1);
  this.remove();
  updateTodoLists();
}


function sortTodoListByDate(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < (arr.length - i - 1); j++) {
      if (compareAsc(arr[j].dueDate, arr[j+1].dueDate) === 1) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

function updateTodoLists() {
  todoList = sortTodoListByDate(todoList);
  overDueList = [];
  todayList = [];
  futureList = [];
  priorityList = [];

  overDueList = todoList.filter(todo => (isPast(todo.dueDate) && !isToday(todo.dueDate)));
  todayList = todoList.filter(todo => isToday(todo.dueDate));
  futureList = todoList.filter(todo => isFuture(todo.dueDate));
  priorityList = todoList.sort((a, b) => a.priority - b.priority);
}

mainInbox.addEventListener('click', inbox);
homeBtn.addEventListener('click', inbox);
docTodayInbox.addEventListener('click', todayInbox);
docPriorityInbox.addEventListener('click', priorityInbox);

// updateTodoLists();
// projectInbox();
addTodoModal();
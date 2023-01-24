import './style.css';
import { format, getDay, isFuture, isPast, compareAsc, isToday, isYesterday } from 'date-fns';
import deleteIcon from './icons/delete.svg';

const content = document.getElementById('content');
const mainInbox = document.querySelector('.main-inbox');
const homeBtn = document.querySelector('.btn-home');
const docTodayInbox = document.querySelector('.today-inbox');
const docPriorityInbox = document.querySelector('.priority-inbox');
const addTask = document.querySelector('.add-task');
const addProject = document.querySelector('.add-project');

let projects = [];
let todoList = [];
let overDueList = [];
let todayList = [];
let futureList = [];
let priorityList = [];
const today = new Date();

function defaultInbox() {
  content.innerHTML = '';

  const inboxTitleBox = document.createElement('div');
  const inboxTitle = document.createElement('h3');
  const date = document.createElement('span');

  inboxTitleBox.classList.add('inbox-title-box');
  inboxTitle.classList.add('inbox-title');
  inboxTitle.classList.add('inbox-heading');

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

  content.appendChild(todayTodo());
  const heading = document.querySelector('.heading');
  heading.classList.add('inbox-title');
  heading.classList.add('inbox-heading');
}

function priorityInbox() {
  content.innerHTML = '';

  content.appendChild(priorityTodo());
  const heading = document.querySelector('.heading');
  heading.classList.add('inbox-title');
  heading.classList.add('inbox-heading');
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
  const removeBtn = document.createElement('input');

  removeBtn.classList.add('remove-btn');
  removeBtn.setAttribute('type', 'radio');
  removeBtn.addEventListener('click', removeTodo);

  todoCardEl.classList.add('todo-card');
  todoCardEl.classList.add(`priority-${todo.priority}`);
  todoCardEl.dataset.project = todo.type;
  todoCardEl.dataset.value = todo.value;
  todoCardEl.addEventListener('click', editTodoModal);

  title.classList.add('todo-title');
  desc.classList.add('todo-desc');

  dueDate.classList.add('todo-due-date');
  project.classList.add('todo-due-date');

  title.textContent = todo.title;
  desc.textContent = todo.desc;
  dueDate.textContent = format(todo.dueDate, 'MMM dd, yyyy');
  project.textContent = todo.type;

  todoCardEl.appendChild(removeBtn);
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

function createProject() {
  const projectTitle = document.querySelector('.modal-title');
  projects.push(project(projectTitle.value));
  updateProjectList();
  removeModal();
}

function projectCard(project) {
  const projectList = document.querySelector('.projects-list');
  const li = document.createElement('li');
  const p = document.createElement('p');
  const btn = document.createElement('button');

  li.classList.add('project-list');
  li.dataset.project = project.projID;

  const removeIcon = new Image();
  removeIcon.src = deleteIcon;
  removeIcon.classList.add('icon');

  btn.classList.add('remove-project-btn');
  btn.classList.add('btn');
  btn.addEventListener('click', removeProject);

  btn.appendChild(removeIcon);

  li.addEventListener('click', projectInbox);

  p.textContent = project.projID;
  li.appendChild(p);
  li.appendChild(btn);

  projectList.appendChild(li);
}

function removeProject(e) {
  e.stopPropagation();
  const currentProject = this.parentNode;
  const workingList = todoList.filter(todo => todo.type === currentProject.dataset.project);

  workingList.forEach(item => {
    const index = todoList.findIndex(todo => todo.type === item.type);
    todoList.splice(index, 1);
  }); 

  const projectIndex = projects.findIndex(project => project.projID === currentProject.dataset.project);

  projects.splice(projectIndex, 1);

  currentProject.remove();
  updateProjectList();
  updateTodoLists();
  defaultInbox();
}

function updateProjectList() {
  document.querySelector('.projects-list').innerHTML = '';
  projects.forEach(project => {
    projectCard(project);
  });
}

function projectInbox() {
  content.innerHTML = '';
  const currentProject = this.dataset.project;
  const workingList = todoList.filter(todo => todo.type === currentProject);
  const projectBox = document.createElement('div');
  const heading = document.createElement('h3');
  const projectInbox = document.createElement('div');

  heading.classList.add('heading');
  heading.classList.add('inbox-heading');
  heading.textContent = currentProject;

  workingList.forEach(todo => projectInbox.appendChild(todoCard(todo)));
  
  projectBox.appendChild(heading);
  projectBox.appendChild(projectInbox);
  content.appendChild(projectBox);
}

function createTodo(title, desc, day, mon, year, priority, type, value) {
  let dueDate = today;

  if (day != '') {
    dueDate = new Date(year, (mon - 1), day);
  }

  type === '' ? type = 'inbox' : type = type;

  return {
    title,
    desc,
    dueDate: dueDate,
    priority,
    type,
    value,
  };
}

function addTodoModal() {
  content.style.display = 'none';
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
  dateInput.setAttribute('placeholder', 'mm/dd/yyyy');

  dateInput.type = 'date';

  dateInput.onkeyup = enableDisable;

  dateBox.appendChild(dateInput);

  const dropDownBox = document.createElement('div');
  const prioritySelector = document.createElement('select');
  const projectSelector = document.createElement('select');  

  dropDownBox.classList.add('drop-down-box');

  const inboxOption = document.createElement('option');
  inboxOption.textContent = 'Inbox';
  inboxOption.setAttribute('selected', '');

  projectSelector.appendChild(inboxOption);

  prioritySelector.classList.add('modal-priority');
  projectSelector.classList.add('modal-project');

  for (let i = 4; i >= 1; i--) {
    const priorityOption = document.createElement('option');
    priorityOption.textContent = i;
    priorityOption.classList = `priority-${i}`;
    prioritySelector.appendChild(priorityOption);
  };

  projects.forEach(project => {
    const projectOption = document.createElement('option');
    projectOption.dataset.projID = project.projID;
    projectOption.textContent = project.projID;

    projectSelector.appendChild(projectOption);
  });

  dropDownBox.appendChild(prioritySelector);
  dropDownBox.appendChild(projectSelector);

  const btnBox = document.createElement('div');
  const submitBtn = document.createElement('button');
  const cancelBtn = document.createElement('button');

  btnBox.classList.add('btn-box');
  submitBtn.classList.add('submit-btn');
  cancelBtn.classList.add('cancel-btn');

  submitBtn.type = 'button';
  cancelBtn.type = 'button';

  submitBtn.disabled = true;

  submitBtn.textContent = 'Add';
  cancelBtn.textContent = 'Cancel';

  submitBtn.addEventListener('click', addTodo);
  cancelBtn.addEventListener('click', removeModal);

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
  form.appendChild(dropDownBox);
  form.appendChild(btnBox);

  modal.appendChild(form);

  document.body.appendChild(modal);
}

function addProjectModal() {
  content.style.display = 'none';
  const modal = document.createElement('div');
  const form = document.createElement('form');

  modal.classList.add('modal');
  form.classList.add('project-form');

  const titleBox = document.createElement('div');
  const titleInput = document.createElement('input');

  titleBox.classList.add('modal-box');
  titleBox.classList.add('modal-box-title');
  titleInput.classList.add('modal-title');

  titleInput.setAttribute('placeholder', 'Project');
  titleInput.onkeyup = enableDisable;

  titleBox.appendChild(titleInput);

  const btnBox = document.createElement('div');
  const submitBtn = document.createElement('button');
  const cancelBtn = document.createElement('button');

  btnBox.classList.add('btn-box');
  submitBtn.classList.add('submit-btn');
  cancelBtn.classList.add('cancel-btn');

  submitBtn.type = 'button';
  cancelBtn.type = 'button';

  submitBtn.disabled = true;

  submitBtn.textContent = 'Add';
  cancelBtn.textContent = 'Cancel';

  submitBtn.addEventListener('click', createProject);
  cancelBtn.addEventListener('click', removeModal);

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
  form.appendChild(btnBox);

  modal.appendChild(form);

  document.body.appendChild(modal);
}

function removeModal() {
  document.querySelector('.modal').remove();
  content.style.display = 'initial';
}

function editTodoModal() {
  content.style.display = 'none';
  const modal = document.createElement('div');
  const form = document.createElement('form');

  const value = this.dataset.value;
  const workingTodo = todoList.find(todo => todo.value === value);

  modal.classList.add('modal');
  form.classList.add('todo-form');

  const titleBox = document.createElement('div');
  const titleInput = document.createElement('input');

  titleBox.classList.add('modal-box');
  titleBox.classList.add('modal-box-title');
  titleInput.classList.add('modal-title');

  titleInput.setAttribute('value', workingTodo.title);
  titleInput.onkeyup = enableDisable;

  titleBox.appendChild(titleInput);

  const descBox = document.createElement('div');
  const descInput = document.createElement('input');

  descBox.classList.add('modal-box');
  descBox.classList.add('modal-box-desc');
  descInput.classList.add('modal-desc');

  if (workingTodo.desc === '') {
    descInput.setAttribute('placeholder', 'Description');
  } else {
    descInput.setAttribute('value', workingTodo.desc);
  }

  descBox.appendChild(descInput);

  const dateBox = document.createElement('div');
  const dateInput = document.createElement('input');

  dateBox.classList.add('modal-box');
  dateInput.classList.add('modal-date');
  dateInput.setAttribute('placeholder', 'mm/dd/yyyy');

  dateInput.type = 'date';

  dateInput.onkeyup = enableDisable;

  dateBox.appendChild(dateInput);

  const dropDownBox = document.createElement('div');
  const prioritySelector = document.createElement('select');
  const projectSelector = document.createElement('select');  

  const inboxOption = document.createElement('option');
  inboxOption.textContent = 'Inbox';
  inboxOption.setAttribute('selected', '');

  projectSelector.appendChild(inboxOption);

  prioritySelector.classList.add('modal-priority');
  projectSelector.classList.add('modal-project');

  for (let i = 4; i >= 1; i--) {
    const priorityOption = document.createElement('option');
    priorityOption.textContent = i;
    priorityOption.classList = `priority-${i}`;
    prioritySelector.appendChild(priorityOption);
  };

  projects.forEach(project => {
    const projectOption = document.createElement('option');
    projectOption.dataset.projID = project.projID;
    projectOption.textContent = project.projID;

    projectSelector.appendChild(projectOption);
  });

  dropDownBox.appendChild(prioritySelector);
  dropDownBox.appendChild(projectSelector);

  const btnBox = document.createElement('div');
  const submitBtn = document.createElement('button');
  const cancelBtn = document.createElement('button');

  btnBox.classList.add('btn-box');
  submitBtn.classList.add('submit-btn');
  cancelBtn.classList.add('cancel-btn');

  submitBtn.type = 'button';
  cancelBtn.type = 'button';

  submitBtn.disabled = true;

  submitBtn.textContent = 'Edit';
  cancelBtn.textContent = 'Cancel';

  submitBtn.addEventListener('click', function() {
    editTodo(value);
  });
  cancelBtn.addEventListener('click', removeModal);

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
  form.appendChild(dropDownBox);
  form.appendChild(btnBox);

  modal.appendChild(form);

  document.body.appendChild(modal);
  enableDisable();
}

function addTodo() {
  const title = document.querySelector('.modal-title').value;
  const desc = document.querySelector('.modal-desc').value;
  const date = document.querySelector('.modal-date').value;
  const priority = document.querySelector('.modal-priority').value;
  const projLocation = document.querySelector('.modal-project').value;

  let day = '';
  let mon = '';
  let year = '';

  if (date != '') {
    [year, mon, day] = date.split('-');
  } 

  const value = uniqueValue(date);
  
  todoList.push(createTodo(title, desc, day, mon, year, priority, projLocation, value));
  updateTodoLists();
  removeModal();
  updateDisplay();
}

function editTodo(value) {
  const title = document.querySelector('.modal-title').value;
  const desc = document.querySelector('.modal-desc').value;
  const date = document.querySelector('.modal-date').value;
  const priority = document.querySelector('.modal-priority').value;
  const projLocation = document.querySelector('.modal-project').value;

  let day = '';
  let mon = '';
  let year = '';

  if (date != '') {
    [year, mon, day] = date.split('-');
  } 
  
  const index = todoList.findIndex(todo => todo.value === value);
  todoList.splice(index, 1);
  todoList.push(createTodo(title, desc, day, mon, year, priority, projLocation, value));
  updateTodoLists();
  removeModal();
  updateDisplay();
}

function uniqueValue(date) {
  return `${(Math.random() + 1)}${date}`;
}

function removeTodo(e) {
  e.stopPropagation();
  const index = todoList.findIndex(todo => todo.value === this.dataset.value);
  todoList.splice(index, 1);
  this.parentNode.remove();
  updateTodoLists();
}

function updateDisplay() {
  const inbox = document.querySelector('.inbox-heading').textContent.split(' ')[0];
  switch(inbox) {
    case 'Inbox':
      defaultInbox();
      break;

    case 'Today':
      todayInbox();
      break;
    
    case 'Priority':
      priorityInbox();
      break;

    default:
      projectInbox();
  }
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

mainInbox.addEventListener('click', defaultInbox);
homeBtn.addEventListener('click', defaultInbox);
docTodayInbox.addEventListener('click', todayInbox);
docPriorityInbox.addEventListener('click', priorityInbox);
addTask.addEventListener('click', addTodoModal);
addProject.addEventListener('click', addProjectModal);

updateTodoLists();
defaultInbox();
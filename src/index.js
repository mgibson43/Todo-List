import './style.css';
import { format, getDay, isFuture, isPast, compareAsc, isToday, isYesterday } from 'date-fns';

const content = document.getElementById('content');
const mainInbox = document.querySelector('.main-inbox');
const docTodayInbox = document.querySelector('.today-inbox');
const docPriorityInbox = document.querySelector('.priority-inbox');

let todoList = [];
let overDueList = [];
let todayList = [];
let futureList = [];
let priorityList = [];
const today = new Date();

todoList.push(createTodo("Matthew's Birthday", "He's old", 9, 0, 1998, '4'));
todoList.push(createTodo("Xio's Birthday", "She's young", 11, 3, 2001, '1'));
todoList.push(createTodo("Today", 'today card', 30, 11, 2022, '4'));
todoList.push(createTodo('you?', 'this is a todo', 8, 3, 2200, '3'));
todoList.push(createTodo('are', 'this is a todo', 7, 4, 2042, '2'));
todoList.push(createTodo('how', 'this is a todo', 6, 5, 2023, '3'));

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
  }

  const heading = document.querySelector('.heading');
  heading.classList.add('inbox-title');
}

function priorityInbox() {
  content.innerHTML = '';

  if (priorityList.length > 0) {
    content.appendChild(priorityTodo());
  }

  const heading = document.querySelector('.heading');
  heading.classList.add('inbox-title');
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

  todoCardEl.classList.add('todo-card');
  todoCardEl.classList.add(`priority-${todo.priority}`);
  title.classList.add('todo-title');
  desc.classList.add('todo-desc');
  dueDate.classList.add('todo-due-date');

  title.textContent = todo.title;
  desc.textContent = todo.desc;
  dueDate.textContent = format(todo.dueDate, 'MMM dd, yyyy');

  todoCardEl.appendChild(title);
  todoCardEl.appendChild(desc);
  todoCardEl.appendChild(dueDate);

  return todoCardEl;
}

function createTodo(title, desc, day, mon, year, priority) {
  const dueDate = new Date(year, mon, day);

  return {
    title,
    desc,
    dueDate: dueDate,
    priority
  };
}

function addTodo() {
  const title = document.querySelector('.title');
  const desc = document.querySelector('.desc');
  const dueDate = document.querySelector('.dueDate');
  const priority = document.querySelector('.priority');

  todoList.push(createTodo(title, desc, dueDate, priority));
  todoList = sortTodoListByDate(todoList);
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
docTodayInbox.addEventListener('click', todayInbox);
docPriorityInbox.addEventListener('click', priorityInbox);

updateTodoLists();
inbox();
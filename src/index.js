import './style.css';
import { format, getDay, isFuture, isPast, compareAsc, isToday, isYesterday } from 'date-fns';

const content = document.getElementById('content');
let todoList = [];
let overDueList = [];
let todayList = [];
let futureList = [];
const today = new Date();

todoList.push(createTodo("Matthew's Birthday", "He's old", 9, 0, 1998, 'four'));
todoList.push(createTodo("Xio's Birthday", "She's young", 11, 3, 2001, 'one'));
todoList.push(createTodo('you?', 'this is a todo', 8, 3, 2200, '3'));
todoList.push(createTodo('are', 'this is a todo', 7, 4, 2042, '2'));
todoList.push(createTodo('how', 'this is a todo', 6, 5, 2023, '3'));
todoList = sortTodoListByDate(todoList);
overDueList = todoList.filter(todo => isPast(todo.dueDate));
todayList = todoList.filter(todo => isToday(todo.dueDate));
futureList = todoList.filter(todo => isFuture(todo.dueDate));

function inbox() {
  content.innerHTML = '';

  const inboxTitleBox = document.createElement('div');
  const inboxTitle = document.createElement('h2');
  const date = document.createElement('p');

  inboxTitleBox.classList.add('inbox-title-box');
  inboxTitle.classList.add('inbox-title');

  inboxTitle.textContent = 'Inbox';
  date.textContent = format(today, 'EEE, MMM dd');

  inboxTitleBox.appendChild(inboxTitle);
  inboxTitleBox.appendChild(date);

  content.appendChild(inboxTitleBox);
  content.appendChild(overDueTodo());
}

function overDueTodo() {
  const overDueBox = document.createElement('div');
  const heading = document.createElement('h3');
  const overDueInbox = document.createElement('div');

  heading.classList.add('heading');
  heading.textContent = 'Overdue';
  overDueList.forEach(todo => overDueInbox.appendChild(todoCard(todo)));

  overDueBox.appendChild(heading);
  overDueBox.appendChild(overDueInbox);
  return overDueBox;
}

function todayTodo() {

}

function futureTodo() {

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

inbox();

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

function updateToday() {
  
}

function updateInbox() {

}
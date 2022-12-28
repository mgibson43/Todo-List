import './style.css';
import { format, getDay, isDate, isPast, compareAsc, isValid, isToday, isYesterday } from 'date-fns';

const content = document.getElementById('content');
const todoList = [];

function inbox() {
  content.innerHTML = '';

  const inboxTitleBox = document.createElement('div');
  const inboxTitle = document.createElement('h2');
  const date = document.createElement('p');

  const overDueBox = document.createElement('div');
  const todayBox = document.createElement('div');
  
  const todoCard = document.createElement('div');
  const todoTitle = document.createElement('h3');
  const dueDate = document.createElement('p');

  inboxTitle.textContent = 'Inbox';
  date.textContent = today;

  inboxTitleBox.appendChild(inboxTitle);
  inboxTitleBox.appendChild(date);

  content.appendChild(inboxTitleBox);
}

inbox();

todoList.push(createTodo('Hello', 'Hello World', 'today', '1'));

function createTodo(title, desc, dueDate, priority) {
  return {
    title,
    desc,
    dueDate,
    priority
  };
}

function addTodo() {
  const title = document.querySelector('.title');
  const desc = document.querySelector('.desc');
  const dueDate = document.querySelector('.dueDate');
  const priority = document.querySelector('.priority');

  todos.push(createTodo(title, desc, dueDate, priority));
}

function sort() {

}

function updateToday() {
  
}

function updateInbox() {

}

function updatePriorityOne() {

}

function updatePriorityTwo() {

}

function updatePriorityThree() {

}



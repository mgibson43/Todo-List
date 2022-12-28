import './style.css';
import { format, getDay, isDate, isPast, compareAsc, isValid, isToday, isYesterday } from 'date-fns';

const content = document.getElementById('content');
const todoList = [];
const today = new Date();

todoList.push(createTodo('Hello', 'Hello World', , '1'));

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

  const overDueBox = document.createElement('div');
  const inboxBox = document.createElement('div');

  todoList.forEach(todo => {
    const todoCard = document.createElement('div');
    const todoTitle = document.createElement('p');
    const todoDesc = document.createElement('p');
    const todoDueDate = document.createElement('p');
    const todoPriority = document.createElement('p');

    todoTitle.textContent = todo.title;
    todoDesc.textContent = todo.desc;
    if (isToday(todo.dueDate)) {
      todoDueDate.textContent = 'Today';
    } else if (isYesterday(todo.dueDate)) {
      todoDueDate.textContent = 'Yesterday';
    } else {
      todoDueDate.textContent = todo.dueDate;
    }
    todoPriority.textContent = todo.priority;

    todoCard.appendChild(todoTitle);
    todoCard.appendChild(todoDesc);
    todoCard.appendChild(todoDueDate);
    todoCard.appendChild(todoPriority);

    inboxBox.appendChild(todoCard);
  });

  content.appendChild(overDueBox);
  content.appendChild(inboxBox);
}

inbox();

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

  todoList.push(createTodo(title, desc, dueDate, priority));
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



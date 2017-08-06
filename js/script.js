const nameInput = document.getElementById('nameInput');
const descriptionInput = document.getElementById('descriptionInput');
const deadlineInput = document.getElementById('deadlineInput');
const allInputs = document.querySelectorAll('input');

const submitButton = document.getElementById('submitButton');
const taskList = document.getElementById('taskList');

function Task(name, description, deadline, complete) {
  this.name = name;
  this.description = description;
  this.deadline = deadline;
  this.complete = false;
}
Task.prototype.finish = function() {
  this.complete = true;
}
Task.prototype.toHTML = function() {
  let taskItem = document.createElement('ul');
  taskItem.innerHTML = '<li>' + this.name + '</li>' +
                      '<li>' + this.description + '</li>' +
                      '<li>' + this.deadline + '</li>';
  if (this.complete === false) {
    taskItem.innerHTML += '<span class="incomplete">click to mark complete';
    taskItem.innerHTML += '</span>';
  } else {
    taskItem.innerHTML += '<span class="complete">click to mark incomplete';
    taskItem.innerHTML += '</span>';
  }
  return taskItem.outerHTML;
}

function Tasklist() {
  this.tasks = [];
}
Tasklist.prototype.add = function(task) {
  this.tasks.push(task);
}
Tasklist.prototype.render = function(list) {
  list.innerHTML = '';
  for (i = this.tasks.length - 1; i >= 0; i -= 1) {
    list.innerHTML += '<li>' + this.tasks[i].toHTML() + '</li>';
  }
}

const task1 = new Task("make a JS app", "show off my skills and learning abilities", "ASAP");
task1.finish();
const task2 = new Task("study more JS", "try to improve every day and make cool things", "tomorrow");
let list1 = new Tasklist();
list1.add(task1);
list1.add(task2);
list1.render(taskList);

submitButton.addEventListener("click", function() {
  let newName = nameInput.value;
  let newDescription = descriptionInput.value;
  let newDeadline = deadlineInput.value;
  let newTask = new Task(newName, newDescription, newDeadline);
  list1.add(newTask);
  list1.render(taskList);
  for (i = 0; i < allInputs.length; i++) {
    allInputs[i].value = '';
  }
});

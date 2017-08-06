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
  taskItem.innerHTML = '<li>' + this.name + '</li>';
  taskItem.innerHTML += '<li>' + this.description + '</li>';
  taskItem.innerHTML +=  '<li>' + this.deadline + '</li>';
  taskList.appendChild(taskItem);
}

const task1 = new Task("make a JS app", "show off my skills and learning abilities", "ASAP");
task1.toHTML();

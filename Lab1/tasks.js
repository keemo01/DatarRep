// (a) Create an array of strings
let Tasks = [];

// (b) Create a function to add a task to the array, called 'addTask'
let addTask = (task) => {
  Tasks.push(task);
  console.log(task + " added to my Tasks Array");
  return Tasks.length;
};

// (c) Create a function to list all tasks
let listAllItems = () => {
  Tasks.forEach((element) => {
    console.log(element);
  });
};

// (d) Create a function to delete a task
let deleteTasks = (task) => {
  let index = Tasks.indexOf(task);
  if (index > -1) {
    Tasks.splice(index, 1);
    console.log(task + " removed from Tasks");
  }
  return Tasks.length;
};

addTask("Work");
listAllItems();
deleteTasks("Work");
listAllItems();

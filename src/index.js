document.addEventListener("DOMContentLoaded", () => {
  //  your code here
  const form = document.querySelector("#create-task-form");
  const newList = document.querySelector("#tasks");
  
  const stop = document.addEventListener("submit",(event)=> {
        event.preventDefault();
        const newTask = document.querySelector ("#new-task-description");
        const taskInputLine = newTask.value;
  
        const tasksList = document.createElement ("li");
        tasksList.textContent = taskInputLine;
  
        newList.appendChild(tasksList);
        newTask.value = "";
  
  });
  })
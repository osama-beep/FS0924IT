function aggiungiTask() {
  const taskInput = document.getElementById("newTaskInput");
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Inserisci un'attività!");
    return;
  }

  const li = document.createElement("li");

  const taskTextSpan = document.createElement("span");
  taskTextSpan.textContent = taskText;
  taskTextSpan.classList.add("task-text");
  li.appendChild(taskTextSpan);

  const buttonContainer = document.createElement("div");
  buttonContainer.classList.add("button-container");

  const removeBtn = document.createElement("button");
  removeBtn.textContent = "Rimuovi";
  removeBtn.classList.add("remove-btn");
  removeBtn.onclick = function() {
    li.remove();
  };

  const doneBtn = document.createElement("button");
  doneBtn.textContent = "Fatto";
  doneBtn.classList.add("done-btn");
  doneBtn.onclick = function() {
    li.classList.toggle("completed");
  };

  buttonContainer.appendChild(doneBtn);
  buttonContainer.appendChild(removeBtn);
  li.appendChild(buttonContainer);

  document.getElementById("todoList").appendChild(li);

  taskInput.value = "";
}


var dt = new Date();
document.getElementById("date").innerHTML = dt.toLocaleString();

  
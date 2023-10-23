const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");

const savedTodoList = JSON.parse(localStorage.getItem("saved-items"));

const createTodo = function (storageData) {
  let todoContents = todoInput.value;
  const newLi = document.createElement("li");
  const newSpan = document.createElement("span");
  const newBtn = document.createElement("button");

  if (storageData) {
    todoContents = storageData.contents;
  }

  // ? 객체가 존재하는지 확인하는 것
  if (storageData?.complete) {
    newLi.classList.add("complete");
  }

  newBtn.addEventListener("click", () => {
    newLi.classList.toggle("complete");
    saveItemsFn();
  });

  newLi.addEventListener("dblclick", () => {
    newLi.remove();
    saveItemsFn();
  });

  newSpan.textContent = todoContents;
  newLi.appendChild(newBtn);
  newLi.appendChild(newSpan);
  todoList.appendChild(newLi);
  todoInput.value = "";
  saveItemsFn();
};

const keyCodeCheck = function () {
  if (window.event.keyCode === 13 && todoInput.value !== "") {
    createTodo();
  }
};

const deleteAll = function () {
  const liList = document.querySelectorAll("li");
  for (let i of liList) {
    i.remove();
  }
  saveItemsFn();
};

const saveItemsFn = function () {
  const saveItems = [];
  for (let i of todoList.children) {
    const todoObj = {
      contents: i.querySelector("span").textContent,
      complete: i.classList.contains("complete"),
    };
    saveItems.push(todoObj);
  }
  saveItems.length === 0
    ? localStorage.removeItem("saved-items")
    : localStorage.setItem("saved-items", JSON.stringify(saveItems));
};

if (savedTodoList) {
  for (let i of savedTodoList) {
    createTodo(i);
  }
}

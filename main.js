const add_button = document.querySelector("#add-btn");
const input_value = document.querySelector("#input");
const list = document.querySelector(".list");

let todo_list = [];

function makeList(todoTitle) {
    const item = document.createElement("div");
    item.classList.add("item");

    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.checked = todoTitle.status;

    const span = document.createElement("span");
    span.textContent = todoTitle.title;

    const delete_btn = document.createElement("button");
    delete_btn.textContent = "Delete";
    delete_btn.classList.add("delte");


    item.appendChild(checkbox);
    item.appendChild(span);
    item.appendChild(delete_btn);
    list.appendChild(item);

    checkbox.addEventListener("click", () => {
        toggleStatus(todoTitle.title);
    });

    delete_btn.addEventListener("click", () => {
        remove_item(todoTitle.title)
    });
}
function clearInput() {
    input_value.value = "";
}

function renderList() {
    list.innerHTML = "";
    for (let i = 0; i < todo_list.length; i++) {
        item = todo_list[i];
        makeList(item);
    }
}
function toggleStatus(title) {
    for (let i = 0; i < todo_list.length; i++) {
        if (todo_list[i].title === title) {
            todo_list[i].status = !todo_list[i].status;
        }
    }
    console.log("todoarr", todo_list);
    syncStorage();
}
function remove_item(title) {
    for (let i = 0; i < todo_list.length; i++) {
        if (todo_list[i].title === title) {
            todo_list.splice(i, 1);
        }
    };
    syncStorage();
    renderList();
}
function addItem(item){
    const next_item = {
        title: item.title,
        status: item.status,
    };
    todo_list.push(next_item);
    syncStorage();
}


function syncStorage(){
    const next_list = JSON.stringify(todo_list);
    localStorage.setItem("my_list", next_list);
}
function loadStorage() {
    const prev_list = JSON.parse(localStorage.getItem("my_list")) || [];
    todo_list = prev_list;
}
function OnAddItem() {
    const val = input_value.value;
  
    if (val === "") {
      alert("Please Fill the Text Area");
    } else {
      const item = {
        title: val,
        status: false,
      };
      addItem(item);
      syncStorage();
      renderItem(item);
      clearInput();
    }
  }
  function events() {
    add_button.addEventListener("click", OnAddItem);
  }
function init() {
    loadStorage();
    renderList();
    events();
}
init();
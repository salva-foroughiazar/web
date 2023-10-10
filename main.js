const add_button = document.querySelector("#add-btn");
const input_value = document.querySelector("#input");
const list = document.querySelector(".list");
const todo_list = [];
function makeList(title) {
    const item = document.createElement("div");
    item.classList.add("item");

    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");

    const span = document.createElement("span");
    span.textContent = title;

    item.appendChild(checkbox);
    item.appendChild(span);
    list.appendChild(item);
}
function clearInput() {
    input_value.value = "";
}
function storage(title) {
    todo_list.push(title);
    const next_list = JSON.stringify(todo_list);
    localStorage.setItem("my_list", next_list);
}
add_button.addEventListener("click", () => {
    const val = input_value.value;

    if (val === "") {
        alert("Please add your task!")
    } else {
        storage(val)
        makeList(val);
        clearInput();
    }
});
todo_list = prev_list;
const prev_list = JSON.parse(localStorage.getItem("my_list"));
for (i=0; i<prev_list.length; i++) {
    const title = prev_list[i];
    makeList(title);
}
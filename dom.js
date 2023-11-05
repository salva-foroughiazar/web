export function clearInput(inputElement) {
    inputElement.value = "";
}

export function makeList(listElement, todoTitle, todo_list) {
    const item = document.createElement("div");
    item.classList.add("item");

    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.checked = todoTitle.status;

    const span = document.createElement("span");
    span.textContent = todoTitle.title;

    const delete_btn = document.createElement("button");
    delete_btn.textContent = "Delete";
    delete_btn.classList.add("delete");

    item.appendChild(checkbox);
    item.appendChild(span);
    item.appendChild(delete_btn);
    listElement.appendChild(item);

    checkbox.addEventListener("click", () => {
        toggleStatus(todoTitle.title, todo_list);
    });

    delete_btn.addEventListener("click", () => {
        remove_item(todoTitle.title, todo_list);
    });
}

export function renderList(listElement, todo_list) {
    listElement.innerHTML = "";
    for (let i = 0; i < todo_list.length; i++) {
        const item = todo_list[i];
        makeList(listElement, item, todo_list);
    }
}

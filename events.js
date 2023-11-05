export function OnAddItem(inputElement, todo_list) {
    const val = inputElement.value;

    if (val === "") {
        alert("Please Fill the Text Area");
    } else {
        const item = {
            title: val,
            status: false,
        };
        addItem(item, todo_list);
        syncStorage(todo_list);
        makeList(list, item, todo_list);
        clearInput(inputElement);
    }
}

export function OndeleteAll(todo_list) {
    const new_items = todo_list.filter((item) => {
        return !item.status;
    });
    todo_list.length = 0; 
    Array.prototype.push.apply(todo_list, new_items); 
    syncStorage(todo_list);
    renderList(list, todo_list);
}

export function Onfilter(statusSelectElement, listElement, todo_list) {
    const selectedStatus = statusSelectElement.value;
    listElement.innerHTML = "";
    for (let i = 0; i < todo_list.length; i++) {
        const item = todo_list[i];
        if (selectedStatus === "all" || (selectedStatus === "done" && item.status) || (selectedStatus === "todo" && !item.status)) {
            makeList(listElement, item, todo_list);
        }
    }
}

export function OnSearch(searchInputElement, listElement, todo_list) {
    const searchQuery = searchInputElement.value.toLowerCase();

    listElement.innerHTML = "";

    for (let i = 0; i < todo_list.length; i++) {
        const item = todo_list[i];
        if (item.title.toLowerCase().includes(searchQuery)) {
            makeList(listElement, item, todo_list);
        }
    }
    searchInputElement.value = "";
}

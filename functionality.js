export function toggleStatus(title, todo_list) {
    for (let i = 0; i < todo_list.length; i++) {
        if (todo_list[i].title === title) {
            todo_list[i].status = !todo_list[i].status;
        }
    }
    syncStorage(todo_list);
}

export function remove_item(title, todo_list) {
    for (let i = 0; i < todo_list.length; i++) {
        if (todo_list[i].title === title) {
            todo_list.splice(i, 1);
        }
    }
    syncStorage(todo_list);
}

export function addItem(item, todo_list) {
    const next_item = {
        title: item.title,
        status: item.status,
    };
    todo_list.push(next_item);
    syncStorage(todo_list);
}

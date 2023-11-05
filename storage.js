export function syncStorage(todo_list) {
    const next_list = JSON.stringify(todo_list);
    localStorage.setItem("my_list", next_list);
}

export function loadStorage() {
    const prev_list = JSON.parse(localStorage.getItem("my_list")) || [];
    return prev_list;
}

import { clearInput, makeList, renderList } from './dom.js';
import { syncStorage, loadStorage } from './storage.js';
import { OnAddItem, OndeleteAll, Onfilter, OnSearch } from './events.js';
import { toggleStatus, remove_item, addItem } from './functionality.js';
import { todo_list } from './store';

const list = document.querySelector(".list");
const input_value = document.querySelector("#input");
const searchInput = document.querySelector("#search-input");
const add_button = document.querySelector("#add-btn");
const removeAll = document.querySelector("#rmv-btn");
const statusSelect = document.querySelector("#statusSelect");

function init() {
    todo_list = loadStorage();
    renderList(list, todo_list);
    events();
}

init();
add_button.addEventListener("click", () => OnAddItem(input_value, todo_list));
removeAll.addEventListener("click", () => OndeleteAll(todo_list));
statusSelect.addEventListener("change", () => Onfilter(statusSelect, list, todo_list));
searchInput.addEventListener("keyup", () => OnSearch(searchInput, list, todo_list));

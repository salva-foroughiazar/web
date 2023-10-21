const btn = document.querySelector("#add-btn");
const input = document.querySelector("input");
const list = document.querySelector(".list");
const todo_list = [];
function makeList(title){

    const listItem = document.createElement("div");
    listItem.classList.add(".list-item");

    const listInput = document.createElement("input");
    listInput.setAttribute("type" , "chechbox");

    const listSpan = document.createElement("span");
    listSpan.textContent = title;

    listItem.appendChild(listInput);
    listItem.appendChild(listSpan);
    list.appendChild(listItem);

}
function reset(){
    input.value = "";
}
function addList(title) {
    todo_list.push(title);
    const nextList = JSON.stringify(todo_list);
    localStorage.setItem("myList" , nextList);
}
btn.addEventListener ("click" , () => {
    const val = input.value;
     if ( val=== ""){
         alert("ERROR");
     } else {
        addList(val);
        makeList(val);
        reset();
     }
});
const prevList = JSON.parse(localStorage.getItem("myList")) || [];
for( i=0; i<=prevList.length; i++) {
    const title = prevList[i];
    makeList(title);
}
document.getElementById('addicionar').addEventListener("click", function(){
    var todo = document.getElementById('task-input');

    if(!todo.value.length) {
        return;
    }

    var list = document.getElementById('tasks');

    var newtodo = '<label><input onclick="completed(this)" type="checkbox" name="check_ok"> ' + todo.value + '</label>';

    list.innerHTML = list.innerHTML + newtodo;

    todo.value = "";
});

function completed(elem) {
    if(elem.checked) {
        elem.parentElement.classList.add("tashed");
    }else{
        elem.parentElement.classList.remove("tashed");
    }
}
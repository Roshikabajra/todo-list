let $ = query => document.querySelectorAll(query);
let _ = query => document.querySelector(query);
let todos = localStorage.getItem("todos")
  ? JSON.parse(localStorage.getItem("todos"))
  : [];
let store = () => localStorage.setItem("todos", JSON.stringify(todos));

_("form").addEventListener("submit", event => {
  event.preventDefault();
  let todoText = _("#todo-input").value;

  if (todoText != "") {
    todos.push(todoText);
    _("#todo-input").value = "";
    store();
    display();
  }
});

_("#clear").addEventListener("click", function() {
  todos = [];
  display();
});

//display the array elements
function display() {
  console.log("called");
  let todoHtmlElement = "";
  for (let i = 0; i < todos.length; i++)
    todoHtmlElement += `<li class='todo-item'>${todos[i]} <button onclick="Delete(this);" id=${i} class="waves-effect waves-light btn red-btn">Delete</button>
    </li>`;
  _("ul").innerHTML = todoHtmlElement;
}
display();

function Delete(deleteTodo) {
  console.log(deleteTodo.getAttribute("id"));
  // console.log(index);
  deleteTodo.parentNode.parentNode.removeChild(deleteTodo.parentNode);
  console.log(deleteTodo);
}
display();


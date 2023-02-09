// Add New Task
const tasks= document.querySelector('.tasksBlock');
function addNewTask(element) {
    
    // console.log(element);
    // Bir önceki elementi seç
    const previousElement = element.previousElementSibling;
    const previousElementValue = previousElement.value;

    
    const taskView=`
    
    <div class="input-group mb-3">
        <div class="input-group-text">
            <input class="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input" onclick="doneTask(this)">
        </div>
        <input type="text" class="form-control" aria-label="Text input with checkbox" value="${previousElementValue}" disabled>
        <button class="btn btn-outline-danger" type="button" onclick="deleteTask(this)">Delete</button>
    </div>
    `
    tasks.innerHTML += taskView;
}
// Press the "Enter" key inside the input field to trigger the button.
var input = document.getElementById("myInput");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("myBtn").click();
  }
});
//Add New Task2
const tasks2= document.querySelector('.tasksBlock2');


function addNewTask2(element) {
    
    // console.log(element);
    // Bir önceki elementi seç
    const previousElement = element.previousElementSibling;
    const previousElementValue = previousElement.value;

    
    const taskView=`
    
    <div class="input-group mb-3">
        <div class="input-group-text">
            <input class="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input" onclick="doneTask(this)">
        </div>
        <input type="text" class="form-control" aria-label="Text input with checkbox" value="${previousElementValue}" undisabled>
        <button class="btn btn-outline-danger" type="button" onclick="deleteTask(this)">Delete</button>
    </div>
    `
    tasks.innerHTML += taskView;
}

// Delete Task
function deleteTask(element) {
    
// console.log(element)
const parentElement = element.parentElement;
tasks.removeChild(parentElement);
}

// Done Task

function doneTask(element) {
if(element.checked){
 element.parentElement.nextElementSibling.style.textDecoration = "line-through";
 element.parentElement.nextElementSibling.style.background = "blue";
}else{
    element.parentElement.nextElementSibling.style.textDecoration = "none";
    element.parentElement.nextElementSibling.style.background = "none";
}
}
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){ 
    if(inputBox.value === ''){
        alert("You must write something!");
    }
    else{  //this else will add elements to the task list
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li); 
        let span = document.createElement("span");
        span.innerHTML= "\u00d7";
        li.appendChild(span);
    }
    // also after this we need to clear the input field after taking the input
    inputBox.value=" ";
    saveData();
    // now i will add one cross icon to delete the completed task i..e, span tag
}
//we are adding an event listener for checking and deletion of task 
listContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){ //if clicked on LI in the container, then it should check the ticked object
    e.target.classList.toggle("ticked"); 
    saveData();
    }else if(e.target.tagName === "SPAN"){ //and if target on Span than it should delete the element
        e.target.parentElement.remove(); //parent Element is the LI element it will get removed
        saveData();
    }
}, false);
//now we are adding a function to save the task so that after refresh the tasks not get deleted somehow
function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}// now whenever we create new item we need to call this func so to save data
//now whenever we want to display our data while opening website we will:
function showData(){
    listContainer.innerHTML = localStorage.getItem("data"); 
}
showData();

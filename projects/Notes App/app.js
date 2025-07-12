const notesContainer = document.querySelector(".notes-container");
const newBtn = document.querySelector(".btn");

let notes = document.querySelectorAll(".input-box");

function showNotes(){
    notesContainer.innerHTML = localStorage.getItem("notes") || "";
    notes = document.querySelectorAll(".input-box");
    notes.forEach(nt => {
        nt.addEventListener("keyup", UpdateStorage);
});
}
showNotes();

function UpdateStorage(){
    localStorage.setItem("notes", notesContainer.innerHTML);
}
newBtn.addEventListener("click",()=>{
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute ("contenteditable","true");
    inputBox.placeholder ="Enter your text/notes";
    img.src="delete.png";
    notesContainer.appendChild(inputBox).appendChild(img);
    UpdateStorage();
});
notesContainer.addEventListener("click",function(e){
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        UpdateStorage();
    }
    else if(e.target.tagName === "P"){
        notes = document.querySelectorAll(".inputBox");
        notes.forEach(nt =>{
            nt.onkeyup = function(){
                UpdateStorage();
            }
        })
    }
});
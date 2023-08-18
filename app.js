const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".create-note");
const deleteBtn = document.querySelector(".delete-note");
let notes = document.querySelectorAll(".input-box");


createBtn.addEventListener("click", createNotes);


function showNotes(){
    notesContainer.innerHTML = localStorage.getItem("notes");
}
showNotes();

function updateStorage(){
    localStorage.setItem("notes", notesContainer.innerHTML);
}

function createNotes()
{
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = ("input-box");
    inputBox.setAttribute("contenteditable", "true");
    img.src = "images/delete.png";
    notesContainer.appendChild(inputBox).appendChild(img);
}


notesContainer.addEventListener("click", function(e){
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        updateStorage();
    }
    else if(e.target.tagName === "P"){
        notes = document.querySelectorAll(".input-box");
        notes.forEach(nt => {
            nt.onkeyup = function(){
                updateStorage();
            }
        })
    }

});

// Delete all notes
function deleteAllNotes(){
    notesContainer.innerHTML = "";
    updateStorage();
}

deleteBtn.addEventListener("click", deleteAllNotes);


//update notes

document.addEventListener("keydown", event => {
    if(event.key === "Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }

})
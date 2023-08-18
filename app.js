const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".create-note");
let notes = document.querySelectorAll(".input-box");


createBtn.addEventListener("click", createNotes);

function createNotes()
{
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = ("input-box");
    inputBox.setAttribute("contenteditable", "true");
    img.src = "images/delete.png";
    notesContainer.appendChild(inputBox).appendChild(img);
}


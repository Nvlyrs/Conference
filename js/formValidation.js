"use strict"

const form = dialogWindow.querySelector(".form");
const surname = document.getElementById("surname"),
    name = document.getElementById("name"),
    patronymic = document.getElementById("patronymic"),
    organization = document.getElementById("organization"),
    email = document.getElementById("email"),
    title = document.getElementById("title"),
    section = document.getElementById("section"),
    material = document.getElementById("material");

let rules = {
    required: true,
}

form.addEventListener('submit',e=>{
    e.preventDefault();
    form.forEach((input)=>{
        let result = approve.value(input, rules);
        if (result.approved){
            input.classList.add("correct");
            input.classList.remove("error");
        } else{
            input.classList.add("error")
            input.classList.remove("correct")
        }
    });
});

function checkInputs(item){
    if (input == ''){
        input.classList.add("error");
    }
    else{
        input.classList.add("correct");
    }
}
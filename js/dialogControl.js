"use strict"

const dialogBtn = document.querySelector(".application-btn");
const dialogWindow = document.getElementById("dialogWindow");
const submitBtn = dialogWindow.querySelector("[type = submit]");
const closeBtn = dialogWindow.querySelector(".close-btn");
let flag;

dialogBtn.addEventListener('click', () => {
    dialogWindow.showModal();
    flag = true;
});

closeBtn.addEventListener('click',()=>{
    dialogWindow.close();
});

if (flag) {
    document.addEventListener('click', (e) => {
        const withinBoundaries = e.composedPath().includes(dialogWindow);
        if (withinBoundaries) {
            dialogWindow.close();
        }
    });
}

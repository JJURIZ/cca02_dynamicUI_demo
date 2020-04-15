'use strict';

let changeBgColor = document.getElementById("background-change"),
    tagButton = document.getElementById("button-tag-h1"),
    elementButton = document.getElementById("button-element-h1"),
    userH1Input = document.getElementById("input-h1-text"),
    userH1Template = '<h1>You wrote this: {{text}}!</h1>',
    h1TextArea = document.getElementById("h1-div"),
    bgState = 0;

tagButton.addEventListener("click", function(){
    let newH1 = userH1Template.replace("{{text}}", userH1Input.value);
    h1TextArea.innerHTML += newH1;
});

elementButton.addEventListener("click", function(){
    let newH1 = document.createElement("h1");
    newH1.innerText = userH1Input.value;

    h1TextArea.appendChild(newH1);
});


changeBgColor.addEventListener("click", function(){
    if (bgState != 1){
        document.body.classList.remove("changeBG3");
        document.body.classList.add("changeBG2");
        bgState = 1;
    } else {
        document.body.classList.remove("changeBG2");
        document.body.classList.add("changeBG3");
        bgState = 2;
    }
});
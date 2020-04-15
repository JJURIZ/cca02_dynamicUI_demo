"use strict";

(function () {
    let 
        inputH1 = document.getElementById("input-h1-text"),
        buttonTagH1 = document.getElementById("button-tag-h1"),
        buttonElementH1 = document.getElementById("button-element-h1"),
        changeBackground = document.getElementById("background-change"),
        tagH1Template = '<h1>I have added {{text}} element via tag</h1>',
        firstTextDiv = document.getElementById("h1-div"),
        backgroundColor = 0,

        buttonParagraph = document.getElementById("button-paragraph"),
        inputTextarea = document.getElementById("input-p-text"),
        paragraphDiv = document.getElementById("textarea-div");

    //Adds an H1 tag to h1-div
    buttonTagH1.addEventListener("click", function () {
        let newH1 = tagH1Template.replace("{{text}}", inputH1.value);
        firstTextDiv.innerHTML += newH1;
    });

    //Adds an H1 element to h1-div
    buttonElementH1.addEventListener("click", function () {
        let newH1 = document.createElement("h1");
        newH1.innerText = inputH1.value + " inserted H1 element into Div!"

        firstTextDiv.appendChild(newH1);

    });

    //Toggles background color of body
    changeBackground.addEventListener("click", function () {
        if (backgroundColor == 0) {
            document.body.classList.remove("changeBG1");
            document.body.classList.add("changeBG2");
            backgroundColor = 1;
        } else {
            document.body.classList.remove("changeBG2");
            document.body.classList.add("changeBG1");
            backgroundColor = 0;
        }
    });

    //Adds text from textarea to textarea-div
    buttonParagraph.addEventListener("click", function(){
        let newParagraph = document.createElement("p");
        newParagraph = inputTextarea.value;
        paragraphDiv.innerHTML += newParagraph + '<br></br>';
        inputTextarea.value = "";
    });
})();
'use strict';

(function () {
    let output = document.getElementById("book-list-data"),
        addButton = document.getElementById("add-button"),
        clearButton = document.getElementById("clear-button"),
        sortByButton = document.getElementById("sort-by-author-lname"),
        titleText = document.getElementById("title"),
        fNameText = document.getElementById("author-first-name"),
        lNameText = document.getElementById("author-last-name"),
        yearText = document.getElementById("publish-year"),
        books = [];

    let Book = function Book(title, fname, lname, year) {
        this.Title = title;
        this.AuthorFirstName = fname;
        this.AuthorLastName = lname;
        this.Year = year;
    };

    let renderList = function renderList() {
        output.innerHTML = "";
        books.forEach(function (book, idx, arr) {
            let newDiv = document.createElement("div"),
                newHeading = document.createElement("h2"),
                newPara = document.createElement("p");

            newHeading.innerText = book.Title;
            newPara.innerHTML = "<em>by</em> " + book.AuthorFirstName + " " + book.AuthorLastName;

            newDiv.appendChild(newHeading);
            newDiv.appendChild(newPara);

            output.appendChild(newDiv);
        });

    };

    addButton.addEventListener("click", function () {
        let newBook = new Book(titleText.value, fNameText.value, lNameText.value, yearText.value);

        books.push(newBook);

        renderList();
    });

    clearButton.addEventListener("click", function(){
        let clearValues = function(){
            titleText.value = "",
            fNameText.value = "",
            lNameText.value = "",
            yearText.value = "";
        }
        clearValues();

    });

    sortByButton.addEventListener("click", function(){
            let sortNum = 0;
        books = books.sort(function(a, b){
            let nameA = a.AuthorLastName.toUpperCase();
            let nameB = b.AuthorLastName.toUpperCase();

            console.log("Sort! A: " + sortNum++ + nameA + " B: " + nameB);
            if(nameA < nameB){
                return -1;
            }
            if(nameA > nameB){
                return 1;
            }
            return 0;
        });

        renderList();

    });


})();
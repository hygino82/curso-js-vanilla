(function readyJS(win, doc) {
    'use strict';

    let btn = doc.querySelector("#btn");
    let main = doc.querySelector(".main");

    function createElement() {
        const newButton = doc.createElement("button");
        newButton.id = "newButton";
        newButton.innerHTML = "New Button";
        main.appendChild(newButton);
    }


    function alertar() {
        alert('New Button alert');
    }

    function optEvents() {
        if (event.target.id === 'newButton') {
            alertar();
        }
        else if (event.target.id === 'btn') {
            createElement();
        }
    }
   // btn.addEventListener('click', createElement, false);
    main.addEventListener('click', optEvents, false);

})(window, document);
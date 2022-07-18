(function readyJS(win, doc) {
    'use strict';

    //seleciona todos os elementos e não apenas o primeiro
    let btn = doc.querySelectorAll(".button");
    let body = doc.querySelector("body");


    console.log(btn);
    //change body colors
    function changeColors(event) {
        body.style.backgroundColor = event.target.dataset.color;
    }

    for (let i = 0; i < btn.length; i++) {
        btn[i].addEventListener("click", changeColors, false);
    }


})(window, document);
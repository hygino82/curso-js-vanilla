(function readyJS(win, doc) {
    'use strict';

    let btn = doc.querySelector("#btn");
    let menu = doc.querySelector(".menu");
    let body = doc.querySelector("body");

    function toggle(event) {
        if (menu.classList.contains("show")) {
            menu.classList.remove("show");
            btn.setAttribute("src", "button.png");
            body.style.backgroundColor = 'lightgray';
        } else {
            menu.classList.add("show");
            btn.setAttribute("src", "close.svg");
            body.style.backgroundColor = 'yellow';
        }
    }
    btn.addEventListener("click", toggle, false);
})(window, document);
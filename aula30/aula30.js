(function readyJS(win, doc) {
    'use strict';

    let form = doc.querySelector('#form');

    //send Ajax form
    function sendForm(event) {
        let ajax = new XMLHttpRequest();
        ajax.open('POST', 'controller.php');
        ajax.onreadystatechange = function () {
            console.log(ajax.status);
            console.log(ajax.readyState);
            console.log(ajax.responseText);
        };
        ajax.send();
    }

    form.addEventListener('submit', sendForm, false);

})(window, document);
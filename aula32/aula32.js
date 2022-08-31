(function readyJS(win, doc) {
    'use strict';

    let form1 = doc.querySelector('#form1');
    let name = doc.querySelector('#name');
    let response = doc.querySelector('.response');

    //Send form to node js
    function sendForm(event) {
        event.preventDefault();
        let ajax = new XMLHttpRequest();
        let params = 'name=' + name.value;
        ajax.open('POST', 'http://localhost:3000');
        ajax.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        ajax.onreadystatechange = function () {
            if (ajax.status === 200 && ajax.readyState === 4) {
                let arr = JSON.parse(ajax.responseText);
                //console.log(arr);
                response.innerHTML = "<h1>O usuário " + arr.name + " possui " + arr.age + " anos de idade.</h1>";
            }
        };
        ajax.send(params);
    }
    form1.addEventListener('submit', sendForm, false);
})(window, document);
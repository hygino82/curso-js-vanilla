(function readyJS(win, doc) {
    'use strict';

    let form = doc.querySelector('#form');

    //send Ajax form
    function sendForm(event) {
        event.preventDefault();

        let ajax = new XMLHttpRequest();
        let params = 'name=' + doc.querySelector('#name').value;
        ajax.open('POST', 'controller.php');
        ajax.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        ajax.onreadystatechange = function () {
            if (ajax.status === 200 && ajax.readyState === 4) {
                //console.log(JSON.parse(ajax.responseText));
                let json = JSON.parse(ajax.responseText);
                console.log(json.name + ' - ' + json.age + ' - ' + json.city);
            }
        };
        ajax.send(params);
    }

    form.addEventListener('submit', sendForm, false);

})(window, document);
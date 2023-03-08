(function readyJS(win, doc) {
    'use strict';

    let form1 = doc.querySelector('#form1');
    //submit form
    function sendForm(event) {
        event.preventDefault();
        let ajax = new XMLHttpRequest();
        let formData = new FormData(form1);
        let btn = doc.querySelector('#btn');
        let result = doc.querySelector('.result');
        let progress = doc.querySelector('.progress');

        ajax.open('POST', 'controller.php');

        ajax.unloadstart = function () {
            btn.value = 'Carregando';
        };

        ajax.upload.onprogress = function (event) {
            if (event.lengthComputable) {
                progress.style.width((event.loaded * 100) / event.total) + '%';
                //console.log(event.loaded + '/' + event.total);
            }
        };

        ajax.onloadend = function () {
            btn.value = 'Salvar';
            result.innerHTML = 'Arquivo carregado com sucesso!';
        };

        ajax.send(formData);
    }

    form1.addEventListener('submit', sendForm, false);
})(window, document);
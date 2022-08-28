(function readyJS(win, doc) {
    'use strict';

    let btn = doc.querySelector('#btnDb');

    function showDb() {

        let ajax = new XMLHttpRequest();
        ajax.open('GET', 'db.json');
        ajax.onreadystatechange = function () {
            if (ajax.status === 200 && ajax.readyState === 4) {
                let res = JSON.parse(ajax.responseText);
                let car = res.car;

                for (let i = 0; i < car.length; i++) {
                    console.log(car[i].color);
                }
            }
        };
        ajax.send();

    }

    btn.addEventListener('click', showDb, false);

    let btns = doc.querySelector("#btn-spring");

    function executa() {
        let url = 'http://localhost:8080/api/v1/console';
        let xhttp = new XMLHttpRequest();
        xhttp.open("GET", url, false);
        xhttp.send();//A execução do script pára aqui até a requisição retornar do servidor
    }

    btns.addEventListener('click', executa, false);


    console.log(xhttp.responseText);
})(window, document);
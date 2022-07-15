(function readyJS(win, doc) {
    'use strict';
    let btn = doc.querySelector('#btn');
    let sel = doc.querySelector('#select');


    function alertar(event) {
        //event.preventDefault();//previne a ação padrão do botão
        console.log(event.target.innerHTML);
    }

    sel.addEventListener("change", alertar, false);
    btn.addEventListener("click", alertar, false);
})(window, document);
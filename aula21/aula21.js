(function readyJS(win, doc) {
    'use strict';

    let body = doc.querySelector('body');
    body.style.backgroundColor = 'blue';

    let image = doc.querySelector('#cruzeiro');
    console.log(image.dataset.info);
    console.log(image.hasAttribute('data-info'));//verifica se existe o atributo
})(window, document);
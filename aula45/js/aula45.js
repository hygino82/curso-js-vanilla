(function (win, doc) {
    'use strict';

    let result = doc.querySelector('.result');

    function data() {
        return 'O livro é: ' + this.name + ' e tem '
            + this.pages + ' páginas.'
    }

    /* let book1 = {
         title: 'O Senhor dos Anéis',
         pages: 1212
     };
 
     let book2 = {
         title: 'O Iluminado',
         pages: 415
     };*/

    let ajax = new XMLHttpRequest();
    ajax.open('GET', 'controller.php');
    ajax.onreadystatechange = function () {
        if (ajax.readyState === 4 && ajax.status === 200) {
            let res = JSON.parse(ajax.responseText);
            res.map(function (elem, ind, obj) {
                let child = doc.createElement('div');
                //child.innerHTML = data.call(elem, 'Dilma', 57);
                //child.innerHTML = data.apply(elem, ['Dilma', 57]);
                let newFunction = data.bind(elem);
                child.innerHTML = newFunction();
                result.appendChild(child);
            })
        }
    };
    ajax.send();
})(window, document);
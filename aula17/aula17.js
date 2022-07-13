(function readyJS(win, doc) {
    'use strict';

    // let teste = doc.getElementById('teste');
    // teste.className = 'new Class';
    // teste.style.color = 'pink';
    // console.log(teste);

    // let myClass = doc.getElementsByClassName('divClass');
    // myClass.inn
    // console.log(myClass[0].innerHTML("<h2>oi"));

    // let byName = doc.getElementsByName('img');
    // console.log(byName);

    // let byTag = doc.getElementsByTagName('h1');
    // console.log(byTag);

    let byQuery = doc.querySelector('.btn');//#id, .class
    // console.log(byQuery);

    let byQueryAll = doc.querySelectorAll('.btn');
    for (let i = 0; i < byQueryAll.length; i++) {
        byQueryAll[i].addEventListener('click', function () {
            doc.querySelector('body').style.backgroundColor = this.getAttribute('data-color');
        });
    }

    console.log(byQueryAll);


})(window, document);

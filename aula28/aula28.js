(function readyJS(win, doc) {
    'use strict';
    let btn = doc.querySelector('#btn');

    //setTimeout(counter, 3000);//executa uma vez o evento após 3 segundos
    //setInterval(counter, 3000);//repete o evento a cada 3 segundos
    /*console.log('hello');

    function counter() {
        for (let i = 0; i < 10; i++) {
            console.log('Valor ' + i);
        }
    }

    btn.addEventListener('click', counter, false);

    console.log('world');*/

    let i = 0;
    function counter() {
        i++;
        console.log(i);

        if (i >= 5) {//permite para a função recursiva
            return;
        }
        setTimeout(counter, 1000);
    }

    counter();
})(window, document);
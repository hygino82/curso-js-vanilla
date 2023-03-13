(function (win, doc) {
    'use strict';
    let a = 'Dilma';
    let b = 'Opressora';
    // let number1 = 7;
    // let number2 = 3.5;
    // console.log(a + ' ' + b);
    //console.log(`A ${a} ser ${b}`);
    // console.log(`a soma de ${number1} e ${number2} ser ${number1 + number2}`);
    let result = doc.getElementById('result');
    //result.innerHTML = `<p>A <strong>${a}</strong> ser ${b}</p>`;

    // let nomes = ['Jupira', 'Gorete', 'Tenório', 'Nestor'];

    // //nomes.map(nome => result.innerHTML += `Bom dia <strong>${nome}</strong><br>`);
    // result.innerHTML = '';
    // nomes.map((elem, ind, obj) => {
    //     result.innerHTML += `${elem}<br>`;
    // });

    function tag(string, ...values) {
        console.log(`
        ${values[1]} ${string[1]} ${values[0]}
        `);
    }

    tag`a ${a} ser ${b}<br>`;
})(window, document);
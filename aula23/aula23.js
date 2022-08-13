(function readyJS(win, doc) {
    'use strict';

    let msg = 'A tecnologia está tão presente na nossa rotina que mal a concebemos. É o celular que compacta diversas possibilidades, o assistente virtual que executa ações a um simples comando de voz, um relógio que monitora nossa atividade e traz insights sobre a saúde. São recursos tão intrínsecos ao dia a dia que se tornam extensões do corpo e da vida, aponta o neurocientista Miguel Nicolelis.';
    console.log(msg);
    //let regex = /a/gi;//busca a letra 'a' global ignorando case
    //let regex = /A|l/gi;//busca a ou l
    //let regex = /[A-Z0-9]/g;//outra forma
    //let regex = /(nossa) | [0 - 9] |(virtual)/g;
    //let regex = /(s{2})/gim;//busca dois s
    let regex = /ss?/gim;
    //match
    let result = msg.match(regex);
    console.log(result);

})(window, document);

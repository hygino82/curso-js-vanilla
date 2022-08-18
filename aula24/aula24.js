(function readyJS(win, doc) {
    'use strict';

    let msg = "Dark Souls é um jogo eletrônico de RPG de ação desenvolvido pela FromSoftware e publicado pela Namco Bandai Games. Lançado originalmente em setembro de 2011 para PlayStation 3 e Xbox 360, é um sucessor espiritual de Demon's Souls e a segundo título da série Souls.";
    let email = "dilma.malandra@opressora.net.br";
    console.log(email);

    //let regex = /\d/gim;//busca todos os dígitos da string
    //let regex = /\D/gim;//busca todos os caracteres que não são dígitos da string
    //let regex = /\w/gim;//alfanumérico
    //let regex = /\W/gim;//não alfanumérico
    //let regex = /\s/gim;//espaços
    //let regex = /\S/gim;//não espaços

    //Match
    // let result = msg.match(regex);
    // console.log(result);

    //split
    //let result = msg.split(regex);//quebra a string onde tem a regra
    //console.log(result);

    //replace
    //let result = msg.replace(regex, '---');//quebra a string onde tem a regra
    // let result = msg.replace(regex, function (x) {
    //     return '__' + x.toUpperCase() + '__';
    // });

    //search
    let regex = /^[a-z0-9.]+@+[a-z0-9]+\.+[a-z]+(\.+[a-z]+)?$/gi;
    let result = email.match(regex);
    if (result != null) {
        console.log('Email válido');
    }
    else {
        console.log('Email inválido');
    }
    //console.log(result);

})(window, document);
let person = new Object();
person.name = 'Dilma';

let esporte = {
    nome: 'bocha'
};

console.log(person);

let pessoa = {
    nome: 'Gorete',
    idade: 57,
    solterira: true,
    animais: ['gato', 'cão'],
    trabalha: function (dia) {
        if (dia > 1 && dia < 7) {
            return true;
        }
        else {
            return false;
        }
    },
    support: esporte
};
console.log(pessoa.idade);
console.log(pessoa.trabalha(3));
console.log(pessoa.support.nome);

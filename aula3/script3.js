//caixa de alert
//window.alert('Cuidado');

//caixa de dialog
//window.confirm('Deseja mesmo apagar?\nEsse dado será excluído');
//caixa de prompt
//window.prompt('Informe sua data de nascimento', 'dd/MM/yyyy');

//operadores aritiméricos
let a = 2;
let b = 3;
let c = '3';
let str_a = 'Webdisign em foco';
console.log(`Soma = ${a + b}`);//soma
console.log(`Diferença = ${a - b}`);//diferença
console.log(`Produto = ${a * b}`);//produto
console.log(`Divisão = ${a / b}`);//divisão
console.log(a + str_a);//concatenação de número com string
//console.log(a += 3);//adiciona 3 ao valor de a

for (let i = 10; i > 5; i--) {
    console.log(`Valor de i = ${i}`);
}

//operadores de igualdade
// console.log(`${a} == ${b} -> ${a == b}`);
// console.log(`${a} != ${b} -> ${a != b}`);
// console.log(`${a} > ${b} -> ${a > b}`);
// console.log(`${a} < ${b} -> ${a < b}`);
// console.log(`${c} === ${b} -> ${c === b}`);

//operadores lógicos
if (a == 2 && b == 3) {
    console.log('São iguais');
}

console.log(a == 2 || b == 7);

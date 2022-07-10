let arr1 = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 8, 'x', 'z'];

//concatenação
let arrFinal = arr1.concat(arr2);
// console.log(arrFinal);

//every
// let every_x = arrFinal.every(
//     function verifyElements(elem, ind, obj) {
//         return (typeof elem == 'number');
//     }
// );
//console.log(every_x);
//filter
let filter_x = arrFinal.filter(
    function verifyElements(elem, ind, obj) {
        return (typeof elem == 'string');
    }
);

//foreach
let data = '';
let foreach_x = arrFinal.forEach(
    function verifyElements(elem, ind, obj) {
        if (ind > 3) {
            data += 'Indice ' + ind + ' : ' + elem + '\n';
        }

    }
);

let index_x = arrFinal.indexOf('x');
if (index_x = -1) {
    window.alert('Esse valor não existe');
}
console.log(arrFinal);
console.log(index_x);

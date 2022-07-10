let arr1 = [1, 2, 3, 4, 5];
let arr2 = ['s', 't', 's'];
let arrFinal = arr1.concat(arr2);

//reduce 
let reduce_x = arrFinal.reduceRight(
    function verifyElements(v1, v2, ind, array) {
        return v1 + v2;
    }
);

//shift
//let shift_x = arrFinal.shift();//remove 0 primeiro elemento
//let shift_x2 = arrFinal.shift();

//slice
//let slice_x = arrFinal.slice(3, 6);//pega um pedaço doa array indicando inicio e fim -1

//sort
//let sortX = arrFinal.sort();//ordena o array

//splice
//let spliceX = arrFinal.splice(3, 2, 'y', 'w', 0);
//remove a partir da posição x a quantidade y de elementos apos o terceiro parâmetro vão os elementos para inserir

//unshift
// let unshiftX = arrFinal.unshift(-1, -2, -3);//insere valores no início do array
// console.log(unshiftX);//imprime a quantidade de elementos
//To String
let toStringX = arrFinal.toString();//converte em string
console.log(arrFinal);
console.log(toStringX);

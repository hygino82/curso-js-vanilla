//console.log(this);

// function teste(){
//     console.log(this);
// }

// teste();

// let obj = {
//     name: 'Dilma',
//     func: function () {
//         return this.name;
//     }
// }
// console.log(obj.func());

// //use strict;corrige erros e traz segurança
// 'use strict';
// let x = 10;
// console.log(x);

// function teste() {
//     console.log(this);
// }

// teste();
//iife
(function (win, doc) {
    'use strict';
    let x = 20;
    console.log(20);
    console.log(win);
    console.log(doc);
    console.log(this);
})(window, document);

//console.log(x);

(function readyJS(win, doc) {
    'use strict';

    // function personalbar(name) {
    //     this.name = name;
    // }

    // let obj = new personalbar('Dilma');
    // let obj = {
    //     nome: 'Dilma'
    // };

    // let obj = new Object();
    // obj.name = 'Dilma';
    // obj.idade = 69;
    function person(name, func) {
        this.name = name;
        this.friends = ['Godofredo', 'Gargamel'];
        this.func = func;
        // this.salario = function () {
        //     return 'Salario';
        // }
    }

    person.prototype.city = 'Coronel Vivida';

    person.prototype.salario = function () {
        if (this.func === 'manager') {
            return 3000.0;
        } else if (this.fucn = 'user') {
            return 100.0;
        }
    }

    let obj = new person('Gorete', 'manager');
    //obj.friends.push('Juca');
    let obj2 = new person('Jupira', 'user');

    console.log(obj);
    console.log(obj2);
    console.log(obj.salario());

})(window, document);
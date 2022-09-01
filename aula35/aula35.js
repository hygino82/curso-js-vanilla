(function readyJS(win, doc) {
    'use strict';

    function app(adiant, salario) {
        this.adiant = adiant;
        this.salario = salario;
    }

    app.prototype.percent = function () {
        return this.adiant * 100 / this.salario;
    }

    app.prototype.result = function () {
        return 'O funcionário recebeu ' + this.percent() + '% relativo ao adiantamento';
    }

    let obj = new app(100, 1000);

    // console.log(obj);
    // console.log(obj.result());

    win.app = app;//atribui ao escopo global
})(window, document);
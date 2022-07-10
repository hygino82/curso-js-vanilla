let person = {
    name: 'Dilma',
    age: 54,
    cc: 123
}

let operation = {
    sacar: function (saldo, valor) {
        return saldo -= valor;
    },
    depositar: function (saldo, valor) {
        return saldo += valor;
    }
}

let bank = {
    person: person,
    operation: operation,
    saldo: 50
}

let value = 40;

console.log(
    bank.person.name +
    ' portador da conta ' +
    bank.person.cc +
    ' realizou um saque de R$' +
    value +
    ' ficando com R$' +
    bank.operation.sacar(bank.saldo, value)
);

console.log(
    bank.person.name +
    ' portador da conta ' +
    bank.person.cc +
    ' realizou um deposito de R$' +
    value +
    ' ficando com R$' +
    bank.operation.depositar(bank.saldo, value)
);
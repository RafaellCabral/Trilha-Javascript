class Cliente {
    nome;
    cpf;
}


class ContaCorrente {
    agencia;
    _saldo = 0;

    sacar(valor) {
        if (this._saldo >= valor) {
            this._saldo -= valor;
        }
    }


    depositar(valor) {
        if (valor > 0) {
            this._saldo += valor;
        }
    }
}

let valorSacado = 200;


const cliente1 = new Cliente();
cliente1.nome = " Rafael";
cliente1.cpf = 123456789;

const cliente2 = new Cliente();
cliente2.nome = " Isaac";
cliente2.cpf = 123123123;


const contaCorrenteRafael = new ContaCorrente();
contaCorrenteRafael._saldo = 0;
contaCorrenteRafael.agencia = 1001

console.log(contaCorrenteRafael._saldo);
contaCorrenteRafael.depositar(100);
console.log(contaCorrenteRafael._saldo);
contaCorrenteRafael.sacar(300);



console.log(contaCorrenteRafael._saldo);
//console.log(cliente1);
//console.log(cliente2);


//ctrl alt pra baixo e para cima para editar varias linhas
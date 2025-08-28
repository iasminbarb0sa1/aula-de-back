// Atividade 4
// Contexto: Um banco quer proteger as contas de seus clientes. O saldo deve ser privado e
// só pode ser alterado por métodos que validam depósitos e saques.
// Comando: Crie uma classe ContaBancaria que represente uma conta de cliente, garantindo
// que os dados internos sejam protegidos e que o comportamento da conta siga regras de
// segurança e consistência. Teste a classe criando objetos e simulando operações típicas de
// uma conta bancária.

class ContaBancaria{
    #saldo

    constructor(saldoInicial){
        this.#saldo = saldoInicial
    }
    depositar(valor) {
        if (valor > 0)
            this.#saldo = valor;
    }
    sacar(valor) {
        if (valor <= this.#saldo)
            this.#saldo = this.#saldo - valor;
    }

    getExtrato() {
        return this.#saldo
    }

}

module.exports = ContaBancaria


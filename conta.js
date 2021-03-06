/* definicao da classe conta */
class Conta {
    #nomeTitular = "";
    #cpfTitular = "";
    #numeroConta = 0;
    #digitoVerif = 0;
    #saldo = 0;

    constructor(nome, cpf, num, dv, saldo) {
        this.#nomeTitular = nome;
        this.#cpfTitular = cpf;
        this.#numeroConta = num;
        this.#digitoVerif = dv;
        this.#saldo = saldo;
    }

    exibirInfo() {
        return "Conta: " + this.#numeroConta + "/" + this.#digitoVerif +
            " Tit:" + this.#nomeTitular + " (" + this.#cpfTitular + ") R$ " + this.#saldo;
    }
    getNomeTitular(){
        return this.#nomeTitular;
    }
    getNumeroConta(){
        return this.#numeroConta
    }
    getDV(){
        return this.#digitoVerif
    }
    getCpf(){
        return this.#cpfTitular;
    }
    depositar(valor) {
        this.#saldo += +valor;
    }

    atualizarSaldo(saldo) {
        this.#saldo = saldo;
    }
    consultarSaldo(){
        return this.#saldo;
    }

    sacar(valor) {
        if (this.#saldo >= +valor) {
            this.#saldo -= +valor;
            return 0;  // deu certo
        }
        return -1; // deu erro
    }
}

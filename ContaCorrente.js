import { Cliente } from "./Cliente.js";

export class ContaCorrente {
    agencia;
    _cliente;

    _saldo = 0;

    // setter
    set cliente(novoValor){
        if(novoValor instanceof Cliente){
        this._cliente = novoValor;
        }

    } 

    get cliente(){
        return this._cliente;
    }

    sacar(valor){
        if (this._saldo >= valor) {
            this._saldo -= valor;
            return valor;
        }
    }

    depositar(valor){
        if(valor > 0){
            this._saldo += valor;
        }
    }

    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado)
    }
    
    constructor(cliente, agencia){
        this._cliente = cliente;
        this.agencia = agencia;
    }

    
}
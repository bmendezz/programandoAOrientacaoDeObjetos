import {
    Cliente
} from "./Cliente.js"
import {
    ContaCorrente
} from "./ContaCorrente.js"



const cliente1 = new Cliente("Ricardo", 11122233309)
const conta1 = new ContaCorrente(10, cliente1)
conta1.depositar(500);

const cliente2 = new Cliente("Alice", 88822233309)
const conta2 = new ContaCorrente(10, cliente2)

conta1.transferir(250, conta2)

//contaCorrenteRicardo.transferir(500, contaCorrenteAlice)

console.log(cliente1)
console.log(conta2)
console.log('Número total de contas: ', ContaCorrente.numeroDeContas)
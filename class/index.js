//Importandoo arquivo de classe Pessoa 
import ContaBancaria from "./ContaBancaria.js"

let saldoInicial = 100000
const contaBancaria = new ContaBancaria(saldoInicial)

contaBancaria.depositar(20000)
let extrato = contaBancaria.getExtrato()
console.log("Meu saldo é:", extrato);

contaBancaria.sacar(5000);
console.log("meu saldo é:", contaBancaria.getExtrato())

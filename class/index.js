//Importandoo arquivo de classe Pessoa 
import Pessoa from "./Pessoa.js"

//instanciando a classe Pessoa
const pessoa1 = new Pessoa("Ana",15, "1234567890"); //a contante pessoa1 é um objeto
pessoa1.setNome("Ronaldo"); //definindo o nome

//declarei uma variavelnomePessoa que está recebendo o nome que eu defini
let nomePessoa = pessoa1.pegarNome()
console.log(nomePessoa); 
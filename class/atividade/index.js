import Usuario from "./Usuario.js";

const usuario1 = new Usuario("iasmin"); // usuario1 é um objeto
usuario1.setEmail("iasminbarbosa@gmail.com"); 
usuario1.setIdade(18); 


let nomeUsuario = usuario1.pegarNome();
let emailUsuario = usuario1.pegarEmail();
let idadeUsuario = usuario1.pegarIdade();


console.log(nomeUsuario); 
console.log(emailUsuario); 
console.log(idadeUsuario);
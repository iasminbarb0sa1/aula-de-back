// ● Atividade 3
// Contexto: Você precisa criar um sistema que controla carros. Alguns comportamentos, como ligar
// ou frear, devem ser públicos, mas a velocidade do carro deve ser privada e não acessível
// diretamente.
// Comando: Crie uma classe Carro aplicando os conceitos de encapsulamento. O atributo
// velocidade deve ser privado, não podendo ser acessado diretamente. Implemente métodos
// públicos ligar() e frear() para controlar o carro, além de getters e setters que permitam acessar e
// alterar a velocidade de forma segura, incluindo validações quando necessário. Teste a classe
// criando um objeto Carro e chamando seus métodos.

class Carros {
  #velocidade
  
  constructor() {
    this.#velocidade = 0;
    this.ligado = 0;
  }
  ligar() {
    if (this.ligado == 0) {
      this.ligado = 1;
      return "Carro ligado";
    } else {
      return "Carro já está ligado";
    }
  }

   setLigar(){
    
   }

}

module.exports = Carros;


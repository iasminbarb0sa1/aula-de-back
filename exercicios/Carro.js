// Implemente uma classe Carro com atributos privados marca e velocidade. Adicione método
// para acelerar e frear.
class Carros {
    #velocidade
    #marca
    #ligado

    
    constructor() {
      this.#velocidade = 100;
    }


    freiar () {
        const velocidadeAtual = this.#velocidade - 10
        console.log('FREIA POHA!!!!', 'velo atual: ', velocidadeAtual)
        return velocidadeAtual
    }
    acelerar () {
        const velocidadeAtual = this.#velocidade + 10
        console.log('ACELERA ESSE KRL!!!!', 'velo atual: ', velocidadeAtual)
        return velocidadeAtual
    }

    defineVeloci (velocidade) {
        this.#velocidade = velocidade
    }


  
  }
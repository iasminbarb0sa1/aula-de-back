class Pessoa {
    
    //Inicializar os meus atributos na minha classe
    constructor (nome, idade, cpf){
    this.nome = nome;
    this.idade = idade;
    this.cpf = cpf;
    }

    //um metodo para definir o nome
    setNome(nome) {
        this.nome = nome;
    }
    pegarNome(){
        return this.nome;
    }
}

module.exports = Pessoa;
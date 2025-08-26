//1
class Usuario {
    constructor(nome, email, idade) {
        this.nome = nome;
        this.email = email;
        this.idade = idade;
    }

  
    setNome(nome) {
        this.nome = nome;
    }
    setEmail(email) {
        this.email = email;
    }
    setIdade(idade) {
        this.idade = idade;
    }
    pegarNome() {
        return this.nome;
    }
    pegarEmail() {
        return this.email;
    }
    pegarIdade() {
        return this.idade;
    }
}


module.exports = Usuario;

// Contexto: Uma empresa quer organizar seus funcionários em um sistema de back-end. Para isso, você
// precisa criar uma estrutura que permita definir características comuns a todos os funcionários e métodos
// para gerenciar suas informações.
// Comando: Explique como a POO poderia ser aplicada para criar a estrutura de funcionários e quais
// vantagens ela oferece.
// A) Criando uma classe Funcionario que serve como modelo, permitindo instanciar vários objetos com dados
// individuais e métodos compartilhados
// B) Criando apenas variáveis separadas para cada funcionário, armazenando nome, cargo e salário
// C) Criando funções globais que modificam diretamente os dados de cada funcionário, sem organização
// D) Criando apenas um objeto literal que armazena todos os funcionários juntos, sem possibilidade de métodos
//LETRA "A" ESTÁ CORRETA

// // Um professor quer armazenar informações sobre os alunos, como nome e
// // nota. Para proteger esses dados, eles devem ser privados, permitindo acesso apenas
// // por métodos controlados.
// // Comando: Crie a classe utilizando os conceitos de encapsulamento para armazenar e
// // recuperar os dados.

class Aluno{
    #nome;
    #nota;

    constructor(nome, nota){
        this.#nome = nome;
        this.#nota = nota;
    }
    SetNome(nome) {
    this.#nome;
      }
      setNota(nota){
        this.#nota = nota;
      }

      getNome(){
        return this.#nome;
      }

      getNota(){
        return this.#nota
      }
}
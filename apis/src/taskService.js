const express = require('express')

    let tasks = [
        {id: 1, title: "Estudar Apis", done: false},
        {id: 2, title: "Praticar criaçaõ de apis", done: true}
    ]

    //REGRAS DE  NEGOCIO:
    //O título é obrigatório
    // N pode haver título duplicado
    //Só é possivel concluir uma tarefa se ele existir
    //n é permitido atualizar ou excluir uma tarefa inexistente
    //n permitido excluir uma tarefa concluída

    const getAll = () => tasks

    const getById = (id) =>{
        const task = tasks.find(t => t.id === id)
        if(!task) throw {status: 404, massage: "Tarefa não encotrada"}
        return task
    }

    module.exports ={ getAll, getById}


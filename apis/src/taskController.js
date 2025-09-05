const taskController = require('./services/tankService')

const getAll = (req, res) =>{
    const tasks = taskController.getAll()
        res.json(tasks)
}

const getById = (req, res, next) => {
    try{
        const id = perseInt (req.params.id)
        const task = taskController.getById(id)
        res.json(task)
    } catch(error){
        next(error)
    }
}

module.exports = {getAll, getById}

const express = require('express');
const router = express.Router();
const db = require('../config/db');

//localhost:3000/usuarios
//ROTA GET -- RETORNA TODOS OS USUÁRIOS
router.get('/', async (req, res) => {
    try {
        const [rows] = await db.query("SELECT id, nome, email FROM usuario");
        res.json(rows); // retorna a consulta de query
    } catch (error) {
        console.log('error:', error); 
        res.status(500).json({ erro: "erro ao buscar usuarios" });
    }
});

module.exports = router; 
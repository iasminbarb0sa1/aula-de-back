//Arquivo de configuração do banco de dados
const  createPool  = require('mysql2');
const mysql = require('mysql2/promise');

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",   
    database: "back_end"  
});

module.exports = db;
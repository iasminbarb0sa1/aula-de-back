const express = require('express');

const app = express();

app.use(express.json())


//ERRO
const PORT = 3000;
app.listen(PORT, ()=> {
    console.log(`Servidor rodando em http://localhost:${PORT}`)
});
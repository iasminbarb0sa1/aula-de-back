const express = require('express');
const app = express();
const port = 3000;

const usuarioRoute = require('./src/routes/usuarios');

app.use(express.json());

// Prefixo para as rotas de usuário
app.use('/usuarios', usuarioRoute);

app.get('/', (req, res) => {
    res.send("Olá pessoal, estou no navegador");
});

app.listen(port, () => {
    console.log(`servidor rodando na porta ${port}. Abra http://localhost:${port}`);
});



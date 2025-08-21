const cep = '01001000';

//Fetch API - nativo javascript
fetch("https://viacep.com.br/ws/"+cep+"/json/")
.then(res=> res.json())
.then(data => console.log(data))
.catch(err => console.log(err))

//#################################################################

// Função que ler o dados do arquivo
function LerDados(arquivo){
    // Retorna os dados em JSON
    return JSON.parse(fs.readFile(arquivo, 'utf-8'));
}

//salva os dados no arquivo
function salvarDados(arquivo){
    //usa a função de escrever no arquivo, passando com parametros o arquivo é um metodo que converte para json
    fs.writeFile(arquivo, JSON.stringify(dados, null, 2));
}


//
const http = require(http);
const fs = require('fs')
const port = 3000;

const server = http.createServer((req, res)=>{
    res.setHeader("Content-type", "applicatipn/json")
    if(req.method === "GET" && req.url == '/dados'){
        const dados = LerDados ('usuarios.json')//retorna osdados do json
        res.writeHead(200);
        res.end(JSON.stringify(dados));
    }else if(req.method === "POST" && req.url === '/dados'){
        let bory = '';
        //É um evento que escuta quando os dados chegam
        req.on('data', chunk =>{
            bory += chunk.toString();
        });
        req.on('end', ()=> {
            try{

            }catch(error){
                console.log(error);
                res.writeHead(400)
            }
        })
    }

})

server.listen(port, () => {
    console.log(`servidor rodando na porta ${port}. So abrir localhost:${port}/`)
})


const express = require('express')
const server = express()
const routes = require("./routes")

// usando template engine (ejs)
server.set('view engine', 'ejs')

//habilitar arquivos staticos
server.use(express.static("public"))

// rotas
server.use(routes)

//abrindo a porta 3000
server.listen(3000, () => console.log('rodando'))


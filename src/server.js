const express = require('express')
const route = require('./route')
const path = require('path')

// importa o express
const server = express()

//fala qual vai ser a view engine, no caso Ejs
server.set('view engine', 'ejs')

//Fala onde está a pasta que será usada para mostrar o layout
server.use(express.static('public'))

//Altera a pasta para puxar, no caso a pasta views, __dirname pega a pasta onde o arquivo está, nesse caso src, assim ele fica src/views
server.set('views', path.join(__dirname, 'views'))

server.use(express.urlencoded({extended: true}))

server.use(route)

server.listen(8080, () => console.log('Rodando'))
// import { log } from 'node:console';
// import { createServer } from 'node:http';

//fastify é um micro framework, traz apenas o basico de funcionalidades, deixando todo o resto livre pra escolha de outras framework

//node --watch "nome do arquivo" reinicia o servidor de forma automatica quando o codigo for alterado, evitando de ficar executando manualmente o servidor toda vez que for feita uma alteração
//node --watch --no-warnings retira o aviso de ser um recurso experimental

//request recebe dados da requisição do usuario para o servidor http
//response devolve uma resposta da api

// const server = createServer((request, response) => {
//     console.log('Olá');
    

//     return response.end()
// })

// server.listen(3333) //permite rodar varias aplicações diferentes em portas diferentes, basta mudar a porta

import { fastify } from 'fastify'
import { databaseMemory } from "./database-memory.js"

const server = fastify() //criação do servidor
const database = new databaseMemory() //Criação do Database

// CRUD = CREATE, READ, UPDATE E DELETE

server.post('/videos', (request, reply) => { //adicionara um video
    database.create({
        title: 'Video test',
        description: 'Test',
        duration: 180  //em segundos
    })
    console.log(database.listen) // listar os filmes
    return reply.status(201).send()
})


server.get('/videos', () => { //retornara o o video do usuario //apenas a rota get podemos testar pelo navegador
    return 'Hello Word'
})
server.put('/videos', () => { //atualizara o video
    return 'Hello Word'
})
server.delete('/videos', () => { //exclusão do video
    return 'Hello Word'
})

server.listen({
    port: 3333,
})





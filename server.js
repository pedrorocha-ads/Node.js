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
import { log } from 'node:console'

const server = fastify() //criação do servidor
const database = new databaseMemory() //Criação do Database

// CRUD = CREATE, READ, UPDATE E DELETE

server.post('/videos', (request, reply) => { //adicionara um video

    const {title, description, duration} = request.body  
    
    database.create({
        title,
        description,
        duration,
    })
    return reply.status(201).send()
})


server.get('/videos', () => { //retornara o o video do usuario //apenas a rota get podemos testar pelo navegador
    const videos = database.list()

    console.log(videos);
    
    
    return videos
})
server.put('/videos/:id', (request, reply) => { //atualizara o video
    const videoId = request.params.id
    const {title, description, duration} = request.body

    database.update(videoId,{
        title,
        description,
        duration,
    })
    
    return reply.status(204).send()

})
server.delete('/videos', (request, reply) => { //exclusão do video
    const videoId = request.params.id

    database.delete(videoId)

    return reply.status(204).send()
})

server.listen({
    port: 3333,
})





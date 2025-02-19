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

const server = fastify() //criação do servidor

server.get('/', () => { //pagina inicial
    return 'Hello Word'
})
server.get('/nome', () => { //retornara o nome do usuario
    return 'Hello Pedro'
})
server.get('/endereco', () => { //retornara o endereço do usuario
    return 'Hello Word'
})

server.listen({
    port: 3333,
})

// CRUD = CREATE, READ, UPDATE E DELETE



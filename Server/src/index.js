const http = require('http');
const characters = require('./utils/data.js')
const {getCharById} = require('./controllers/getCharById.js')

http.createServer((request, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*') //seteo de cores, le permitimos al front hacer consultas

    if(request.url.includes('/rickandmorty/characters')){
        const id = request.url.split('/').at(-1);
        getCharById(res,Numbre(id))
    }
}).listen(3001, 'localhost')
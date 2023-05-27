const axios = require('axios')

const getCharById = (res, id) =>{
    axios.get(` https://rickandmortyapi.com/api/character/${id}`)
    .then((resul) => resul.data)
    .then(({name, gender, origin, image, status, species}) => {
        let char = {
            id,
            name,
            gender,
            origin,
            image,
            status,
            species
        }
        res.writeHead(200, {'Content-type' : 'application/json'})
        .end(JSON.stringify(char))
    })
    .catch((err) =>res.writeHead(500, {'Content-type' : 'text/plain'}).end(err.message))
}

module.exports = {
    getCharById
}
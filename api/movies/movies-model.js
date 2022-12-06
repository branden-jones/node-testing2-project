const db = require('../../data/db-config');

function list(){
    return db('movies')
}

function specific(id){
    return db('movies')
        .where({id})
        .first()
}

module.exports = {
    list,
    specific
}
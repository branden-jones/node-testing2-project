const db = require('../../data/db-config');

function list(){
    return db('movies')
}

function specific(id){
    return db('movies')
        .where({id})
        .first()
}

async function add(newMovie){
    const [added] = await db('movies')
        .insert(newMovie)
    const newbie = await specific(added)
    return newbie
}

module.exports = {
    list,
    specific,
    add
}
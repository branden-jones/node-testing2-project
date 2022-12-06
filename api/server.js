const express = require('express');
const server = express();
const movieRouter = require('./movies/movies-router');

server.use(express.json())
server.use('/api/movies', movieRouter)

server.get('/', (req,res) => {
    res.status(200).json({
        api: 'Running'
    })
})

server.use((err,req,res,next) => { //eslint-disable-line
    res.status(err.status || 500).json({
        message: err.message,
        customMessage: `Something went terribly wrong`,
        stack: err.stack
    })
})

module.exports = server
const router = require('express').Router()

const Movie = require('./movies-model')

router.get('/', async (req,res,next) => {
    const result = await Movie.list()
    if(result){
    res.status(200).json(result)
    }
    else{
        next({
            status: 400,
            message: 'couldnt grab movies'
        })
    }
})

router.get('/:id', async (req, res, next) => {
    const result = await Movie.specific(req.params.id)
    if(result){
        console.log(result)
        res.status(200).json(result)
        }
        else{
            next({
                status: 400,
                message: `No movie matching ID: ${req.params.id}`
            })
        }
})

module.exports = router
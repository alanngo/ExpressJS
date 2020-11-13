// storing routes in seperate files
import express from 'express'

const ROUTER = express.Router()

ROUTER.get('/', (req, res)=>
{
    res.send( {location:"external.js"})
})

export default ROUTER;
import express from "express"
const PORT = 3200
const APP = express()

APP.get('/', (req, res) => 
{
    res.send({mssg: "spongebob is the best cartoon ever"})
})

APP.listen(PORT, () => console.log(`http://localhost:${PORT}`))
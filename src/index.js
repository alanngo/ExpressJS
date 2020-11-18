import express from "express"
import cors from "cors"
import MongoClient from "mongodb"
import ROUTER from "./external.js"

const PORT = 3200
const APP = express()
const MONGO_URL="mongodb://localhost:27017/"
const DB_NAME = "express_demo"
const COLLECTION_NAME="car"


MongoClient.connect(MONGO_URL).then(client => 
{
    console.log("successfully connected to MongoDB server")
    const DB = client.db(DB_NAME)
    const COLLECTION = DB.collection(COLLECTION_NAME)
    
    // set up body parser
    const BODY_PARSER ={ extended: true }
    APP.use(cors()) 
    APP.use(express.json(BODY_PARSER))
    APP.use(express.urlencoded(BODY_PARSER))


    //use routes from other files
    APP.use('/router',ROUTER)
    
    APP.get('/', (req, res) => 
    {
        COLLECTION.find({}).toArray((err, result)=>
        {
            if (err) console.log(err)
            res.json(result)
        })

    })

    APP.post('/',(req, res) => 
    {
        let entry = req.body
        console.log(entry)
        COLLECTION.insertOne(entry)
        .then(() => res.json(entry))
        .catch(err => console.log(err))
    })
    
    // error handler
    APP.use((err, req, res, next)=>
    {
        console.error(err.stack)
        res.status(500).json
        (
            {
                status: 500,
                message: err.message,
                stacktrace: err.stack
            }
        )
    })

    
}).catch((err) => console.log(err));

APP.listen(PORT, () => console.log(`http://localhost:${PORT}`))
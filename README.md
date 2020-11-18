<img src="expressjs.png" height=80>

## Prereqs

```bash
$ sudo apt install npm
$ sudo apt install nodejs
```

## Initialization

### Main

```bash
$ mkdir src
$ sudo npm init -y
$ sudo npm install nodemon --save-dev
$ sudo npm install express --save
$ sudo npm install cors --save
$ touch src/index.js
```

### package.json
```json
{
  "name": "expressjs",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "type":"module",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "nodemon src/index.js"
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "nodemon": "^2.0.6"
  },
  "dependencies": {
    "cors": "^2.8.5",
    "express": "^4.17.1"
  }
}
```

### Starter Code

```javascript
import express from "express"
import cors from "cors"
const PORT = 3200
const APP = express()

// set up body parser
const BODY_PARSER ={ extended: true }
APP.use(cors()) 
APP.use(express.json(BODY_PARSER))
APP.use(express.urlencoded(BODY_PARSER))

APP.get('/', (req, res) => 
{
    res.json({mssg: "spongebob is the best cartoon ever"})
})

APP.listen(PORT, () => console.log(`http://localhost:${PORT}`))
```

## MongoDB Integration

### Init

```bash
$ sudo npm install mongodb --save
```

### MongoDB Starter Code

```javascript
import express from "express"
import cors from "cors"
import MongoClient from "mongodb"
const PORT = 3200
const APP = express()
const MONGO_URL="" // insert mongo url here
const DB_NAME = "" // insert db url here
const COLLECTION_NAME="" // collection name goes here


MongoClient.connect(MONGO_URL).then(client => 
{
    console.log("successfully connected to server")
    const DB = client.db(DB_NAME)
    const COLLECTION = DB.collection(COLLECTION_NAME)
    
    // set up body parser
    const BODY_PARSER ={ extended: true }
    APP.use(express.json(BODY_PARSER))
    APP.use(express.urlencoded(BODY_PARSER))

    APP.use()
    APP.use(cors()) 

    // routes go here
    
}).catch((err) => console.log(err));

APP.listen(PORT, () => console.log(`http://localhost:${PORT}`))
```
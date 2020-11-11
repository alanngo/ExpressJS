<img src="expressjs.png" height=80>

## Prereqs

```bash
$ sudo apt install npm
$ sudo apt install nodejs
```

## Initialization

```bash
$ mkdir src
$ sudo npm init
$ sudo npm install nodemon --save-dev
$ sudo npm install express --save
```

## Starter Code

```javascript
import express from "express"
const PORT = 3200
const APP = express()

APP.get('/', (req, res) => 
{
    res.send({mssg: "spongebob is the best cartoon ever"})
})

APP.listen(PORT, () => console.log(`http://localhost:${PORT}`))
```
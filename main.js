const fs = require('fs')
const express = require('express')
require('dotenv').config()

const app = express()
const port = process.env.PORT

const read_folder = (req,res,next) => {
    console.log('puta')
    next()
    const testFolder = './images'
    fs.readdir(testFolder, (err, files) => {
        files.forEach(file => {
            console.log(file)
        });
    });
}


app.use(express.static('./'))
app.use(read_folder)

app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/index.html`)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

function redir(link) {
    window.open(link, '_blank')
}
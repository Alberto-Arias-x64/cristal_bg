const fs = require('fs')
const express = require('express')
require('dotenv').config()

const app = express()
const port = process.env.PORT

const read_folder = async(req,res,next) => {

    let img_list = []
    const img_folder = './images'
    fs.readdir(img_folder, (err, files) => {
        files.forEach((file,index) => {
            img_list.push(file)
            if (index === files.length -1) {
                //console.log(img_list)
                fs.writeFile("imgs.json", JSON.stringify(img_list),(err, result) =>{})
            }
        });
    });
    next()
}
    

app.use(express.static('./'))
app.use(read_folder)

app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/index.html`)
})

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})
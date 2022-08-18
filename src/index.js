const express = require('express')
const app = express()
const port= 3000

app.get('/', function (req, res) {
  res.send('Hello World')
})



const me = 
            {
            fname: "Bubacarr Camara",
            minit: "shiddiq",
            lname: "Camara",
            status: "online",
            living: "Alive",
            location: "Brikama",
            phone: "2341521",
            id: "02",
            picture: "/.image/jpg",
            gender: "male",

        }

        
            const student2 = {
            fname: "yaya",
            minit: "l",
            lname: "seeka",
            status: "Online",
            living: "Alive",
            location: "Kartong",
            phone: "2524357",
            id: "03",
            picture: "./image.jpg",
            gender: ""

       }

       
            const  student =  {
            fname: "kebba",
            minit: "f",
            lname: "waiga",
            status: "offline",
            living: "Alive",
            location: "manjay",
            phone: "2524332",
            id: "04",
            picture: "./images.jpg",

       }

            const student3 = {   
            fname: "mustapha",
            minit: "f",
            lname: "waiga",
            status: "offline",
            living: "Alive",
            location: "manjay",
            phone: "2524332",
            id: "04",
            picture: "./images.jpg",

       }


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/me', (req, res) => {
  res.json(me)
})

app.listen(port, () => {
  
  console.log(`Example app listening on port ${port}`)
})

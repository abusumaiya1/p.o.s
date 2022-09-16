
require('dotenv').config()
const mongoose = require('mongoose')
const express = require('express')
const { restart } = require('nodemon')
const app = express()
const port= process.env.PORT



// we are importing middleware
const middleware = require('./utilities/middleware')

app.use(express.json())
app.use(middleware.requestlogger)


// we want to connect mongodb 



const URI = process.env.MONGODB_URI

const connect = () => {
 return mongoose.connect(
  URI,
  {
    useNewUrlParser: true,
    //useUniFieldTopology: true,
    autoIndex: false
  }
 )
}




try {
  connect() 
  console.log('connected to MongoDB')
} catch (error){
  console.log('error connection to MongoDB:', error.message);
}

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

       // today adjustment start here
       let users = [
       {
           id: 1,
           username: 'camara',
           phone: '341262',
           password: 'shiddiq',
         
       },

       {
        
        id: 2,
        username: 'kebba',
        phone: '3412374',
        password: 'kebz',
      
    }
         
       ]


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/me', (req, res) => {
  res.json(me)
})


// step2 for today 

// implementation for all users we are getting all users
app.get('/api/users', (req, res)=> {

res.json(users)


  
  // if you want error 404 to show if user id is not found

  //if (user){
    //res.json(user)

  //} else {
    //res.status(404).end()
  //}

} );

// implementation for getone we are getting one user
app.get('/api/users/:id', (req ,res) =>{
  const id = req.params.id
  const user = users.find((user) => user.id === Number (id))
  res.json(users)
})



//HOW TO DELETE
// implementation for delete
  app.delete('/api/users/:id', (req, res) => {
  const id = req.params.id
  users = users.filter((user) => user.id !== Number(id))

  res.status(204).end()

})
//  end here


// how we can add a new user to your systemm

app.post('/api/users' , (req, res) => {
  const content = req.body

  // here we are saving the data to database
  
  console.log(content);
  res.json(content)
})


// this pop up when user try to find something that is not in your website

app.use(middleware.unknownEndpoint)

// we want to update 
app.put('/api/users/:id', (req, res) =>{
  const id = req.params.id
  res.id

})

app.listen(port, () => {
  
  console.log(`Example app listening on port ${port}`)
})

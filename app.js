const express = require('express')
const app = express()
const PORT = 3000
// ---------------------------(5)
const fruitData = require('./models/fruit')
const veggieData = require('./models/veggies')
// ----------------------------(7)

app.set('view engine', 'ejs')
// npm install express ejs --save

// -----------------------------------(Routes)
app.get('/',(req,res)=>{
    res.send("Welcome Home")
})
app.get('/home',(req,res)=>{
    res.render('Homepage')
})
// ------------------------------{RES.RENDER}
app.get('/fruits',(req,res)=>{
    res.send("Hi Im the fruits")
})
// ----------> [GET] => Retrieve Data from a server
app.get('/veggies',(req,res)=>{
    res.send("Hi Im the veggies")
})
// ----------> [GET] => Retrieve Data from a server


app.listen(PORT,()=>{
    console.log(`Server is now Running...${PORT}`)
})
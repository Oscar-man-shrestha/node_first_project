const express = require('express')
const app = express()
const name = require('ejs')
const { blogs } = require('./model/index')
const { home, signUp, signup, blogPost } = require('./controller/blogController')
app.set ('view engine','ejs')
app.use(express.urlencoded({extended:true}))
require("./model/index")


const blogRoute = require ('./routes/blogRoute.js')


app.use("",blogRoute)
const PORT = 3001
app.listen(PORT,()=>{
    console.log(`Node jS has start at port= ${PORT}`)
})

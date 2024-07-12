const express = require('express')
const app = express()
const name = require('ejs')
const { blogs } = require('./model/index')
app.set ('view engine','ejs')
app.use(express.urlencoded({extended:true}))
require("./model/index")


app.get("/",(req,res)=>{

    res.render("home")
})


app.get("/signUp",(req,res)=>{

    res.render("signup")
})
app.post("/signUp",async(req,res)=>{
   const{username,email,password} = req.body
   console.log(username,email,password)


 await blogs.create({
     username : username,
     email : email,
     password : password
 })
 res.redirect("blogPosts")
})


app.get("/blogPosts",async(req,res)=>{
    const blogPostsblog = await blogs.findAll()
    res.render("blog",{blogs :blogPostsblog})
})

const PORT = 3001
app.listen(PORT,()=>{
    console.log(`Node jS has start at port= ${PORT}`)
})

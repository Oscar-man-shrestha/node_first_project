


exports.renderhome = (req,res)=>{

    res.render("home")
}
exports.signUp = (req,res)=>{

    res.render("signup")
}

exports.signup = async(req,res)=>{
    const{username,email,password} = req.body
    console.log(username,email,password)
 
 
  await blogs.create({
      username : username,
      email : email,
      password : password
  })
  res.redirect("blogPosts")
 }
 exports.blogPost = async(req,res)=>{
    const blogPostsblog = await blogs.findAll()
    res.render("blog",{blogs :blogPostsblog})
}
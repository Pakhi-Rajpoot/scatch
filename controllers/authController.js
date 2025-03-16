
const userModel = require("../models/user-model")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")






const {generateToken} = require("../utils/generateToken");
const { response } = require("express");
module.exports.registerUser = async function(req, res){
    try{
        let{email, fullname, password} = req.body;
        if(fullname.length < 3){
            return res.status(400).json({error:'name must be atleast 3 characters long'})
        }

       let user = await userModel.findOne({email:email})
       if(user){
          return res.send("You already have an account, please login")
       }
       
        bcrypt.genSalt(10, function(err,salt){
            bcrypt.hash(password, salt, async function(err, hash){
                if(err) return res.send(err.message);
                else {
                    let user = await userModel.create({
                        email,
                        password:hash,
                        fullname
                    })
                    
                    
                    let token = generateToken(user);
                    
                    res.cookie("token",token);
                    res.send("user created successfully. Please login")

                }
            })

        })
        
    }
    catch(err){
        res.send(err.message)
    }
   
} 

module.exports.loginUser = async function(req, res){
    let{email, password} = req.body;

   let user = await userModel.findOne({email:email})
   
   if(!user) {
    return res.send("email or password incorrect");
   }
   bcrypt.compare(password, user.password, function(err, result){
    if(result){
        let token = generateToken(user)
        res.cookie("token", token);
       
        res.redirect("/shop")
    
       
    }
    else{
        res.send("email or password incorrect")
    }
    

   })

}

module.exports.logout = function(req, res){
    res.cookie("token","");
    res.redirect("/");

};
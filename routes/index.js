const express = require("express");
const router = express.Router();
const isLoggedIn = require("../middlewares/isLoggedIn");
const productModel = require("../models/product-model")
const userModel = require("../models/user-model")


router.get("/", function(req, res){
    // let error = req.flash("error");
    res.render("index");
});

router.get("/shop" ,isLoggedIn, async function(req, res){
    let products = await productModel.find()
   
    res.render("shop" , {products});
})
router.get("/addtocart/:productId" , isLoggedIn, async function(req, res){
    let user = await userModel.findOne({email: req.user.email})
    user.cart.push(req.params.productId)
    await user.save();
    res.redirect("/shop");
})
router.get("/cart", isLoggedIn, async function(req, res){
    let user = await userModel.findOne({email: req.user.email}).populate("cart")
    res.render("cart" ,{user});
   
   
})

module.exports = router;
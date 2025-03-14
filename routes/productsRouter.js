const express = require("express");
const router = express.Router();
const upload = require("../config/multer-config");
const productModel = require("../models/product-model");

router.post("/create", upload.single("image"), async function (req, res) {
    try {
        let { name, price, discount, panelcolor, textcolor } = req.body;

        // Store the filename instead of the buffer!
        let product = await productModel.create({
            image: req.file.filename, // 👈 This is the change
            name,
            price,
            discount,
            panelcolor,
            textcolor
        });

        res.redirect("/owners/admin");
    } catch (err) {
        console.error(err);
        res.send(err.message);
    }
});

module.exports = router;

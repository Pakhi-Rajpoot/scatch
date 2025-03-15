const express = require("express");
const router = express.Router();
const upload = require("../config/multer-config"); // multer-storage-cloudinary setup
const productModel = require("../models/product-model");

router.post("/create", upload.single("image"), async (req, res) => {
  try {
    const { name, price, discount, panelcolor, textcolor } = req.body;

    console.log(req.file); // This will now have Cloudinary info

    const product = await productModel.create({
      image: req.file.path, //  This is the cloudinary secure URL
      name,
      price,
      discount,
      panelcolor,
      textcolor
    });

    res.redirect("/owners/admin");
  } catch (err) {
    console.error(err);
    res.status(500).send(err.message);
  }
});

module.exports = router;

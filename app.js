const express = require('express');
const app = express();

const cookieParser = require("cookie-parser");
const path = require("path");

const db = require("./config/mongoose-connection")

const ownersRouter = require("./routes/ownersRouter.js")
const productsRouter = require("./routes/productsRouter.js")
const usersRouter = require("./routes/usersRouter.js")
const index = require("./routes/index.js")
const expressSession = require("express-session")
const flash = require("connect-flash");

require("dotenv").config();


app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// app.use(
//     expressSession({
//         resave: false,
//         saveUninitialized: false,
//         secret: process.env.EXPRESS_SESSION_SECRET
//     })
// )
// app.use(flash());

app.set("view engine" , "ejs");
app.use("/", index);
app.use("/owners", ownersRouter);
app.use("/users", usersRouter);
app.use("/products", productsRouter);


app.get("/", (req, res)=>{
    res.send("hey");
});

// app.listen(3000);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
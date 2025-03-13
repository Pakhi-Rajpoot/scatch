const mongoose = require("mongoose");
const config = require("config");
const dbgr = require("debug")



mongoose
.connect('mongodb+srv://pakhirajpoot:mynewpasswordinscatch@scatchcluster0.e7rkt.mongodb.net/scatch?retryWrites=true&w=majority&appName=ScatchCluster0'

).then(function(req,res){
    console.log("connected");
})

module.exports = mongoose.connection;

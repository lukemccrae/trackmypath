var express = require('express')
var app = express()
var cors = require('cors');
var Path = require('./routes/path')
app.use(cors());

app.listen(process.env.PORT || 3000, function() { //app.listen takes two arguments like here, a port number and a function
    console.log("hi");
})

const express = require('express');
const path = require('path');
const bcrypt = require('bcrypt');

//create an node application
const app = express();


//use EJS as the view engine
app.set('view engine', 'ejs');


// use static file
app.use(express.static("public"));

app.use(express.static("node_modules/bootstrap/dist/css"));

app.get("/", (req, res) => {
    res.render("login");
});

app.get("/signup", (req, res) =>{
    res.render("signup");
})



// choose port
const port = 5000;
app.listen(port, ()=> {
    console.log(`Server runing on port: ${port}`);
})

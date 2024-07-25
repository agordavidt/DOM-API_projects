const express = require('express');
const path = require('path');
const bcrypt = require('bcrypt');

//create an node application
const app = express();


//use EJS as the view engine
app.set('view engine', 'ejs');



// choose port
const port = 5000;
app.listen(port, ()=> {
    console.log(`Server runing on port: ${port}`);
})

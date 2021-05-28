const express = require("express");
const bodyParser = require("body-parser");
const session = require('express-session');
const cors = require("cors");
require('dotenv/config')
const app = express();
const path = require('path')
const assert = require('assert');

app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true,
    cookie: { maxAge: 500000 }
}));



//TEMPLATE ENGINE
app.set('view engine', 'hbs');
const publicDirectory = path.join(__dirname,'./public')
app.use(express.static(publicDirectory))

//CORS
var corsOptions = {
    origin: "http://localhost"
};
app.use(cors(corsOptions));

// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
//   });


//BODYPARSE
// parse requests of content-type: application/json
app.use(bodyParser.json());
// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));


//ROUTE
require("./routes/tersedia.route.js")(app);


// SET PORT
const PORT =  3107||process.env.PORT 
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`)
});
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require('dotenv').config()
const app = express();

var corsOptions = {
    origin: "http://localhost"
};
app.use(cors(corsOptions));

// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
//   });

// parse requests of content-type: application/json
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));


require("./routes/tersedia.route.js")(app);

// simple route
app.get("/", (req, res) => {
    res.json({ message: "/get/data, /get/unsc , /get/ct0, /get/all/:page"})
});


//The 404 Route (ALWAYS Keep this as the last route)
app.get('*', function(req, res){
   res.status(404).send("what??")
  });

  
// set port, listen for request
const PORT =  3107||process.env.PORT 
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`)
});
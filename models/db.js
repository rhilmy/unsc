const mysql = require("mysql")


const connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DB    
});


//server
// const connection = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "g03g03n!",
//     database: "dbunsc"
// });


// open the MySQL connection
connection.connect(error => {
    if (error) throw error;
    console.log("Successfully connected to the database.");
});
  
module.exports = connection;
const Ct0 = require("../models/ct0.model.js");


exports.findAll = (req, res) => {
    Ct0.getAll(req.params.hal,(err, data) => {
        if (err) 
            req.status(500).send({
                message:
                    err.message || "Some error occured while retrieving data outlet."
            });
        else res.status(200).send(data);
    }, (err,data)=>{

        if (err) {
            // error handling code goes here
            console.log("ERROR : ",err);            
        } else {            
            // code to execute on data retrieval
            console.log("result from db is : ",data);   
        }    
        
    });

};
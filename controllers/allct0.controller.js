const Allct0 = require("../models/allct0.model.js");


exports.findAll = (req, res) => {
    Allct0.getAll((err, data) => {
        if (err) 
            req.status(500).send({
                message:
                    err.message || "Some error occured while retrieving data outlet."
            });
        else res.send(data);
    });
};
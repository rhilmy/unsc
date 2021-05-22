const Umurct0 = require("../models/umurct0.model.js");


exports.findAll = (req, res) => {
    Umurct0.getAll((err, data) => {
        if (err) 
            req.status(500).send({
                message:
                    err.message || "Some error occured while retrieving data outlet."
            });
        else res.send(data);
    });
};
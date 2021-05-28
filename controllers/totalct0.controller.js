const Totalct0 = require("../models/totalct0.model.js");


exports.findAll = (req, res) => {
    Totalct0.getAll((err, data) => {
        if (err) 
            req.status(500).send({
                message:
                    err.message || "Some error occured while retrieving data outlet."
            });
        else res.status(200).send(data);
    });
};
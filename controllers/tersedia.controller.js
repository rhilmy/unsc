const Tersedia = require("../models/tersedia.model.js");


exports.findAll = (req, res) => {
    Tersedia.getAll((err, data) => {
        if (err) 
            req.status(500).send({
                message:
                    err.message || "Some error occured while retrieving data outlet."
            });
        else res.status(200).send(data);
    });
};
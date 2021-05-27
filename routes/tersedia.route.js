
module.exports = app => {
    const tersedia = require("../controllers/tersedia.controller.js");
    const totalct0 = require("../controllers/totalct0.controller.js");
    const totalunsc = require("../controllers/totalunsc.controller.js");
    const ct0 = require("../controllers/ct0.controller.js");
    const allct0 = require("../controllers/allct0.controller.js");
    const umurct0 = require("../controllers/umurct0.controller.js");
    const tidaktersedia = require("../controllers/tidaktersedia.controller.js");


    // retrieve all data supplier
    app.get("/get/data", tersedia.findAll);
    app.get("/get/ct0", totalct0.findAll);
    app.get("/get/unsc", totalunsc.findAll);
    app.get("/get/all/:hal", ct0.findAll);
    app.get("/get/allct0", allct0.findAll);
    app.get("/get/umurct0", umurct0.findAll);
    app.get("/get/data2", tidaktersedia.findAll);
   
}
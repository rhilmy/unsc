
module.exports = app => {
    const tersedia = require("../controllers/tersedia.controller.js");
    const totalct0 = require("../controllers/totalct0.controller.js");
    const totalunsc = require("../controllers/totalunsc.controller.js");
    const ct0 = require("../controllers/ct0.controller.js");
    const allct0 = require("../controllers/allct0.controller.js");
    const umurct0 = require("../controllers/umurct0.controller.js");
    const tidaktersedia = require("../controllers/tidaktersedia.controller.js");
    const auth = require("../controllers/auth.controller.js");

    app.get("/",(req,res)=>{res.status(200).render("login")})
    app.post("/auth", auth.AuthUser);

 

    
    // retrieve all data supplier
    app.get("/get/data", tersedia.findAll);
    app.get("/get/ct0", totalct0.findAll);
    app.get("/get/unsc", totalunsc.findAll);
    app.get("/get/all/:hal", ct0.findAll);
    app.get("/get/allct0", allct0.findAll);
    app.get("/get/umurct0", umurct0.findAll);
    app.get("/get/data2", tidaktersedia.findAll);


    app.get('/home', function(request, res) {
        if (request.session.loggedin) {
            res.status(200).render('index')
        } else {
            res.status(200).render('login')
        }
       
    });


       //The 404 Route (ALWAYS Keep this as the last route)
    app.get('*', function(req, res){
    res.status(404).send("<h2>what??</h2>")
   });
 

}
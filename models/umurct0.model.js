const sql = require("./db.js");
const Umurct0 =()=>{}


Umurct0.getAll = result => {
    sql.query("SELECT * FROM umurct0", (err, res) => {
        if (err) {
            console.log(`error : ${err}`);
            result(null, err);
            return;
        }

        console.log("Data tersedia : ", res);
        result(null, {data: res});
    });
};


module.exports = Umurct0;

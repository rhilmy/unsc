const sql = require("./db.js");
const Allct0 =()=>{}


Allct0.getAll = result => {
    sql.query("SELECT * FROM ct0", (err, res) => {
        if (err) {
            console.log(`error : ${err}`);
            result(null, err);
            return;
        }

        console.log("Data tersedia : ", res);
        result(null, {data: res});
    });
};


module.exports = Allct0;

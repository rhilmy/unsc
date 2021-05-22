const sql = require("./db.js");
const Tersedia =()=>{}


Tersedia.getAll = result => {
    sql.query("SELECT * FROM tersedia", (err, res) => {
        if (err) {
            console.log(`error : ${err}`);
            result(null, err);
            return;
        }

        console.log("Data tersedia : ", res);
        result(null, {data: res});
    });
};


module.exports = Tersedia;

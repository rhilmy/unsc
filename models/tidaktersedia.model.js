const sql = require("./db.js");
const TidakTersedia =()=>{}


TidakTersedia.getAll = result => {
    sql.query("SELECT * FROM view_exclude_unsc_ct0", (err, res) => {
        if (err) {
            console.log(`error : ${err}`);
            result(null, err);
            return;
        }

        console.log("Data tersedia : ", res);
        result(null, {data: res});
    });
};


module.exports = TidakTersedia;

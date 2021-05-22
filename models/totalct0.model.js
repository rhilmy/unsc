const sql = require("./db.js");

const Totalct0 =()=>{}



Totalct0.getAll = result => {
    sql.query("SELECT * FROM totalct0", (err, res) => {
        if (err) {
            console.log(`error : ${err}`);
            result(null, err);
            return;
        }

        console.log("Data ct0 : ", res);
        result(null, {data: res});
    });
};



module.exports = Totalct0;
const sql = require("./db.js");

const Totalunsc =()=>{}



Totalunsc.getAll = result => {
    sql.query("SELECT * FROM totalunsc", (err, res) => {
        if (err) {
            console.log(`error : ${err}`);
            result(null, err);
            return;
        }

        console.log("Data unsc : ", res);
        result(null, {data: res});
    });
};



module.exports = Totalunsc;
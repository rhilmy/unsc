const sql = require("./db.js");
const Ct0 =()=>{}


Ct0.getAll =(hal,result) => {

  const limit = 5
  const pages = parseInt(hal)
  const offset = (pages - 1) * limit
  const tb ='ct0'

sql.query("SELECT count(*) as numRows FROM ??",[tb],function (err, rows) {
    if(err) {
        console.log("error: ", err);
        result(err, null);
    }else{
        const totalRow = rows[0].numRows;
        sql.query("SELECT * FROM ?? LIMIT ? OFFSET ?",[tb,limit,offset],function (err, rows) {
            if(err) {
                console.log("error: ", err);
                result(err, null);
            }else{
                console.log({TotalHalaman :totalRow, Halaman :pages, PanjangData : rows.length  })
                result(null, {data : rows,TotalHalaman :totalRow, Halaman :pages, PanjangData : rows.length});
            }
        });            
    }
});

    
};


module.exports = Ct0;


const { con } = require("../../db");

function getuserpayments(req, res){
    con.query(`SELECT * FROM user_sub WHERE user_id = ${req.body.userid}`, function(err, data){
       if(err){
        res.json({
            message: "Some thing went wrong",
            data: null,
            status: 302
        })
       }else{
        res.json({
            message: "data found",
            data: data,
            status: 200
        })
       }
    });
}

module.exports = {getuserpayments}
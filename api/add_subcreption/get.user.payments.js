const { con } = require("../../db");

function getuserpayments(req, res){
    const user_id = req.query.user_id;
    con.query(`SELECT * FROM user_sub WHERE user_id = ${user_id};`, function (err, result) {
        if(result[0] === undefined){
            res.json({
                message: "Data Not Found",
                data: result,
                status: 302
            })
        }else{
            res.json({
                message: "Data Found",
                data: result,
                status: 200
            })
        }
    }) 
}

module.exports = {getuserpayments}
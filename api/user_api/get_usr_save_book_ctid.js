
const { con } = require('../../db.js')

function getusrsavebookctid(req, res) {
    var usrid = req.query.usrid;

    try{
        con.query(`SELECT * FROM usr_save_book WHERE user_id = ${usrid};`, function (err, result) {
            array = [];
            if (result === null) {
                res.json({
                    message: "Usr saved book not found",
                    data: null,
                    status: 302
                })
            } else {
                // console.log(result)
                res.json({
                    message: "Usr saved booked found",
                    data: result,
                    status: 200
                }) 
            }
        })
    }catch (e){
     res.json({
        status: 302,
        message: "Server Error"
     })
    }

}

module.exports = { getusrsavebookctid }
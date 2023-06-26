const { con } = require("../../db");

function searchsersavebooks(req, res) {
    var userid = req.query.userid;
    var bookname = req.query.bookname;
    con.query(`SELECT * FROM usr_save_book WHERE user_id=${userid} AND book_name LIKE '%${bookname}%';`, function (err, result) {
        res.json({
            data: result,
            status: 200
        })
    })
}

module.exports = { searchsersavebooks } 
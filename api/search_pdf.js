const { con } = require('../db.js')
function searchpdf(req, res) {
    var bookName = req.query.bookName;
    con.query(`SELECT * FROM books WHERE pdf_name LIKE '%${bookName}%';`, function (err, data) {
        console.log(data)
        if (data[0] == undefined) {
            res.json({
                message: "Books not found on this keyword",
                book: data,
                status: 200
            })
        } else {
            res.json({
                message: "Books found",
                book: data,
                status: 200
            })         
        }
    })

}

module.exports = { searchpdf }  
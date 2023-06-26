const { con } = require('../db.js')
function getpdfdata(req, res) {
    var id = req.query.id;
    console.log(id)
    con.query(`SELECT * FROM books WHERE pdf_id_name = "${id}";`, function (err, data) {
        console.log(data)
        res.json({
            book: data,
            status: 200
        })
    })
}

module.exports = { getpdfdata } 
const { con } = require('../db.js')
function getcatergorylist(req, res) {
    con.query('SELECT * FROM category', function (error, result) {
        res.json({
            data: result,
            status: 200
        })
    })
}

module.exports = { getcatergorylist }

 
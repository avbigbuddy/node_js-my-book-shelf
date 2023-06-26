const { con } = require('../db.js')

function getsubcreption(req, res) {
    con.query('SELECT * FROM subcription_plan', function (error, result) {
        res.json({
            data: result,
            status: 200
        })
    })
}

module.exports = { getsubcreption } 
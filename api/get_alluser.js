const { con } = require('../db.js')
function getuselist(req, res) {
    con.query('SELECT * FROM users', function (error, result) {
        res.json({
            data: result,
            status: 200
        })
    })
}

module.exports = { getuselist } 
const { con } = require('../../db.js')

function getusercate(req, res) {
    var id = req.query.id;
    con.query(`SELECT * FROM user_category WHERE user_id = ${id};`, function (error, result) {
        res.json({
            data: result,
            status: 200
        })
    })
}

module.exports = { getusercate } 
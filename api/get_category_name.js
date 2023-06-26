const { con } = require('../db.js')

function getcategoryname(req, res) {
    var id = req.query.id;

    con.query(`SELECT * FROM category WHERE id = ${id};`, function (error, result) {
        console.log(result)
        res.json({
            title: result[0]["ct_name"],
            status: 200
        })
    })

}

module.exports = { getcategoryname } 
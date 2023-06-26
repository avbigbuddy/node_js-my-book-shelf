const { con } = require("../../db");
function addusrcategory(req, res) {
    var data = req.body;
    console.log(data);
    con.query(`SELECT * FROM user_category WHERE user_id=${data["user_id"]} AND ct_id=${data["ct_id"]};`, function (error, result) {
        if (result[0] == undefined) {
            con.query(`INSERT INTO user_category (user_id, ct_id) VALUES (${data["user_id"]},${data["ct_id"]})`, function (error, result) {
                if (result["protocol41"] == true) {
                    res.json({
                        message: "User Category added",
                        status: 200
                    })
                } else {
                    res.json({ 
                        message: "some thing went wrong",
                        status: 302
                    })
                }
            })
        } else {
            res.json({
                message: "You already selected this category",
                status: 302
            })
        }
    })
}

module.exports = { addusrcategory }
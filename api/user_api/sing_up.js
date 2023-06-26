const { con } = require('../../db.js')

function singup(req, res) {
    var data = req.body;
    var name = data["name"];
    var email = data["email"];
    var password = data["password"];
    var phone = data["phone"];
    var gender = data["gender"];
    var dob = data["dob"];
    console.log(data);
    try {
        con.query(`SELECT * FROM users WHERE email = '${email}';`, function (error, result) {
            console.log(result)
            if (result[0] == undefined) {
                con.query(`SELECT * FROM users WHERE phone = '${phone}';`, function (error, result) {
                    console.log(result)
                    if (result[0] == undefined) {
                        con.query(`INSERT INTO users (name, email, password, phone, gender, dob)
                    VALUES ('${name}','${email}','${password}','${phone}','${gender}','${dob}');`, function (error, result) {
                            console.log(result)
                            if (result["protocol41"] == true) {
                                res.json({
                                     message: "User singup done",
                                    status: 200
                                })
                            } else {
                                res.json({
                                    message: "Some thing went wrong",
                                    status: 302
                                })
                            }
                        })
                    } else {
                        res.json({
                            message: "phone mobile already exist",
                            status: 302
                        })
                    }
                })
            } else {
                res.json({
                    message: "email already exist",
                    status: 302
                })
            }
        })
    } catch (e) {
        console.log(e)
    }
}
module.exports = { singup }
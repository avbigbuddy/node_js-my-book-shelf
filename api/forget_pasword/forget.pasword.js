const { con } = require("../../db");

function forgetpasword(req, res){
  var email = req.body.email;
  var password = req.body.password
  con.query(`UPDATE users SET password = '${password}' WHERE email = '${email}'`, function (error, data) {
    if(error){
       res.json({
        message: "Some thing went wrong",
        status: 302
       })
    }else{
        res.json({
            message: "Update password",
            status: 200,
        })
    }
  })
}

module.exports = {forgetpasword}
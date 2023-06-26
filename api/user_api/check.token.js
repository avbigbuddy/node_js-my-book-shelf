const { con } = require("../../db");

function checkdevice(userid, device) {
 con.query(`SELECT * FROM user_device_tokens WHERE user_id = ${userid} AND dvice_ctoken = '${device}';`, (err, result) => {
   if(err){
    return{
        message: "not authorise",
        status: false,
        token: null
    }
   }else{
    if(result[0] === undefined){
        return{
            message: "not authorise",
            status: false,
            token: null
        }
    }else{
        return{
            message: "authorise",
            status: true,
            token: device
        }
    }
   }
 })
}

module.exports = {checkdevice}
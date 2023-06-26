const { messages } = require("springedge");
const { con } = require("../../db");

async function addToken(device, userid){
  con.query(`SELECT * FROM user_device_tokens WHERE user_id = ${userid}`, (err, result) => {
     if(result[0] === undefined){
        con.query(`INSERT INTO user_device_tokens (user_id, dvice_ctoken) VALUES (${userid}, '${device}');`, (er, db)=>{
            if(er){
             return{
               message: "something went wrong",
               token: null,
               status: false
             }
            }else{
             return{
               message: "new device login succes",
               token: device,
               status: true
             }
            }
           })
     }else{
        var index =result.length
        if(index < 4){
            con.query(`INSERT INTO user_device_tokens (user_id, dvice_ctoken) VALUES (${userid}, '${device}');`, (er, db)=>{
             if(er){
              return{
                message: "something went wrong",
                token: null,
                status: false
              }
             }else{
              return{
                message: "new device login succes",
                token: device,
                status: true
              }
             }
            })
        }else{
            con.query(`DELETE FROM user_device_tokens WHERE id = ${result[index-1]["id"]};`, (e, d)=>{
              if(e){
                return{
                    message: "something went wrong",
                    token: null,
                    status: false
                }
              }else{
                con.query(`INSERT INTO user_device_tokens (user_id, dvice_ctoken) VALUES (${userid}, '${device}');`, (error, response) => {
                  if(error){
                   return{
                    message: "something went wrong",
                    token: null,
                    status: false
                   }
                  }else{
                    const messages = {
                        message: "new device login succes",
                        // token: device,
                        status: true
                    }
                   
                    return {
                        status: true
                    }
                  }
                })
              }
            })
        }
     }
  })
}

module.exports = { addToken }
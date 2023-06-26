
const { con } = require('../../db.js');
const { addToken } = require('./add.device.token.js');

function login(req, res) {
   var userData = req.body;
   var email = userData["user_identy"]
   var password = userData["password"]
   var token = userData["token"]
   try {
      con.query(`SELECT * FROM users WHERE email = '${email}';`, async function (error, result) {
         console.log(result)
         if (result[0] == undefined) {
            con.query(`SELECT * FROM users WHERE phone = '${email}';`, function (error, result) {
               console.log(result)
               if (result[0] == undefined) {
                  res.json({
                     message: "user not found",
                     status: 302
                  })
               } else {
                  if (result[0]["password"] == password) {

                  var token_data = addToken(token, result[0]["id"]);
                  console.log("---------------------------------------------")
                  console.log(token_data)
                  con.query(`SELECT * FROM user_sub WHERE user_id = ${result[0]["id"]};`, function (err, pays) {
                     if(pays[0] === undefined){

                        res.json({
                           data: result[0],
                           dv_token: token_data,
                           payments: pays,
                           status: 200
                        })
                     }else{
                         const lastpay = pays[pays.length -1];
                         const start_date = Date(lastpay["start_date"])
                         const end_date = Date(lastpay["end_date"])
                         console.log(lastpay)
                         console.log(lastpay["start_date"])
                         const now = new Date(); 
                         console.log(start_date)
                         console.log(end_date)
                         res.json({
                           data: result[0],
                           dv_token: token_data,
                           payments: lastpay,
                           status: 200
                        })
                         
                     }
                 })   

                     
                  } else {
                     res.json({
                        message: "password not match",
                        status: 302
                     })
                  }
               }
            })
         } else {
            if (result[0]["password"] == password) {
               // var token_data = await 
               // console.log("---------------------------------------------")
               //    console.log(token_data)

               con.query(`SELECT * FROM user_sub WHERE user_id = ${result[0]["id"]};`, async function (err, pays) {
                  var token_data = addToken(token, result[0]["id"]);
                  console.log("---------------")
                  console.log(token_data)
                  if(pays[0] === undefined){
                     
                     res.json({
                        data: result[0],
                        dv_token: token_data,
                        payments: pays,
                        status: 200
                     })
                  }else{
                      const lastpay = pays[pays.length -1];
                      const start_date = Date(lastpay["start_date"])
                      const end_date = Date(lastpay["end_date"])
                     
                      const now = new Date(); 
                   
                      res.json({
                        data: result[0],
                        dv_token: token_data,
                        payments: lastpay,
                        status: 200
                     })
                      
                  }
              })
            } else {
               res.json({
                  message: "password not match",
                  status: 302
               })
            }
         }
      })
   } catch (e) {
      console.log(e)
   }
}

module.exports = { login }
const { con } = require("../../db");

function addusrsub(req, res){
    subid = req.body.subid;
    userid = req.body.userid;
    trxid = req.body.trxid;
    paymentstatus = req.body.pay_status;
    con.query(`SELECT * FROM subcription_plan WHERE id = ${subid};`, function(err, result){
      console.log(result)
      duration = parseInt(result[0]["duration"])
      const now = new Date(); 
      const currentMonth = now.getMonth(); 
      let day = now.getDate()
      const totalmonth = (currentMonth + duration+1);
      const endMonth = (currentMonth + duration) % 12;
      const current_year = now.getFullYear();
      if(totalmonth > 12){
        const end_year = current_year+1;
        con.query(`INSERT INTO user_sub (user_id, amount, status, start_date, end_date, trxid) VALUES (${userid}, ${result[0]["price"]}, '${paymentstatus}', '${current_year}-${currentMonth+1}-${day}', '${end_year}-${endMonth}-${day}', '${trxid}');`, function(err, data){
          if (err) throw console.log(err)
          res.json({
            paymentData: data,
            status: 200,
            message: "Payment Done"
          }) 
        })

      }else{
        con.query(`INSERT INTO user_sub (user_id, amount, status, start_date, end_date, trxid) VALUES (${userid}, ${result[0]["price"]}, '${paymentstatus}', '${current_year}-${currentMonth+1}-${day}', '${current_year}-${endMonth}-${day}', '${trxid}');`, function(err, data){
          if (err) throw console.log(err)
          
          res.json({
            paymentData: data,
            status: 200,
            message: "Payment Done"
          })
        })
      }

      console.log(`${day}-${currentMonth+1}`)
      
    })
}


module.exports = {addusrsub}
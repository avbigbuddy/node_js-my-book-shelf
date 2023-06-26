const { con } = require('../db.js')
async function getbooksbyid(req, res) {
    // var id = req.query.id;
    try{
    const {id, page, limit} = req.query;
    const offset = (page-1) * limit;
      con.query(`SELECT * FROM books WHERE ct_id = ${id} LIMIT ${+limit} OFFSET ${+offset};`, function (error, result){
          con.query(`select count(*) as count from books where ct_id = ${id}`, function(error, db){
            const totalPage = Math.ceil(+db[0]?.count / limit)
            res.json({
                lastpage: totalPage,
                currentPage: page,
                data: result,
                status: 200
            })
          });
        
    })
    }catch (e){
        console.log(e)
        res.json({
          error: e,
          message: "some thing went wrong",
          status: 302
        })
    }
}

module.exports = { getbooksbyid } 

const { con } = require('../../db.js')
function savemybooks(req, res) {
    var userid = req.body.userid;
    var bookid = req.body.bookid;
    con.query(`SELECT * FROM usr_save_book WHERE user_id=${userid} AND pdf_id_name='${bookid}';`, function (err, data) {
        console.log(data)
        if (data[0] == undefined) {
            con.query(`SELECT * FROM books WHERE pdf_id_name = "${bookid}";`, function (err, result) {
                var bookname = result[0]["auth_name"]
                var ctid = result[0]["ct_id"]
                con.query(`INSERT INTO usr_save_book(ct_id, user_id, pdf_id_name, book_name) VALUES (${ctid}, ${userid}, "${bookid}", "${bookname}");`, function (err, result) {
                    if (result["protocol41"] == true) {
                        res.json({
                            message: "Book added succes",
                            status: 200
                        })
                    } else {
                        res.json({
                            message: "Some thing went wrong",
                            status: 302
                        })
                     }
                })

            })
        } else {
            res.json({
                message: "Book already added",
                status: 302
            })
        }
    })
}

module.exports = { savemybooks }
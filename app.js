
const cors = require('cors');
const express = require("express");
const app = express();
const nodemailer = require('nodemailer')
app.use(cors());
app.use(express.json());

const { login } = require('./api/user_api/login.js')
const { singup } = require('./api/user_api/sing_up.js')
const { getusercate } = require('./api/user_api/get_usr_cat.js')
const { getcategoryname } = require('./api/get_category_name.js')
const { getbooksbyid } = require('./api/get_books_by_id.js')
const { getpdfdata } = require('./api/get_pdf_data.js')
const { searchpdf } = require('./api/search_pdf.js')
const { getcatergorylist } = require('./api/get_catergory_list.js')
const { getuselist } = require('./api/get_alluser.js')
const { getsubcreption } = require('./api/get_subcreption.js')
const { savemybooks } = require('./api/user_api/save_my_books.js')
const { searchsersavebooks } = require('./api/user_api/search_usr_save_books.js');
const { getusrsavebookctid } = require('./api/user_api/get_usr_save_book_ctid.js');
const { addusrsub } = require('./api/add_subcreption/add.usr.subcr.js');
const { getuserpayments } = require('./api/add_subcreption/get.user.payments.js');
const { sendotp } = require('./api/otp_handler/send.otp.js');
const { forgetpasword } = require('./api/forget_pasword/forget.pasword.js');
const { addusrcategory } = require('./api/user_api/add_usr_category.js');

// api path -----------------------------------------------------------------//

//get apis ------------------------------------------------------------------//
app.get('/api/v1/get_catergory_list', getcatergorylist)
app.get('/api/v1/get_alluser', getuselist);
app.get('/api/v1/get_user_category', getusercate);
app.get('/api/v1/get_category_name', getcategoryname);
app.get('/api/v1/get_pdf_data', getpdfdata);
app.get('api/v1/get_books', searchpdf);
app.get('/api/v1/getbooksbyid', getbooksbyid);
app.get('/api/v1/get_subcreption', getsubcreption);
app.get('/api/v1/search_usr_save_books', searchsersavebooks);
app.get('/api/v1/get_usr_books_ct_id', getusrsavebookctid);
app.get('/api/v1/getuserpayments', getuserpayments);


// post apis -------------------- -------------------------------------------//
app.post('/api/v1/login', login);
app.post('/api/v1/sing_up', singup);
app.post('/api/v1/save_my_books', savemybooks);
app.post('/api/v1/add_usr_subcrep', addusrsub);
app.post('/api/v1/forgetpassword', forgetpasword);
app.post('/api/v1/sendotp', sendotp);
app.post('/api/v1/add_user_category', addusrcategory);
// app.get('/api/v1/akash', ronu);

app.listen(3000, function () {
   console.log("server is runnimg on port 3000");
})


// const Sequelize = require("sequelize");
// const sequelize = new Sequelize(
//    'my_book_shelf',
//    'doadmin',
//    'AVNS_wXJ1USqhTnuNF1LnHkj',
//     {
//       host: 'my-book-shelf-do-user-14158325-0.b.db.ondigitalocean.com',
//       dialect: 'mysql'
//     }
//   );

// sequelize.authenticate().then(() => {
//    console.log('Connection has been established successfully.');
// }).catch((error) => {
//    console.error('Unable to connect to the database: ', error);
// });

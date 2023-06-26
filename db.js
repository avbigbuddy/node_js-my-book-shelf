var mysql = require('mysql2');

let con = mysql.createConnection({
    host: "my-book-shelf-do-user-14158325-0.b.db.ondigitalocean.com",
    user: 'doadmin',
    password: 'AVNS_MKhN6f7MD5gNIfqXMtP',
    database: 'defaultdb',
    port: 25060,
    sslmode: "REQUIRED",

});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

module.exports = { con }; 
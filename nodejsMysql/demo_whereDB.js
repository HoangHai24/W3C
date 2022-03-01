var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mydbTest3"
});

con.connect(function(err) {
  if (err) throw err;
//   var sql = "SELECT * FROM customers WHERE address like '%e%'";
var adr = "Mountain /@#&#$(*&) 21";
var sql = "select * from customers where address = " + mysql.escape(adr);
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mydbTest3"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "select * from customers";
  con.query(sql, function (err, result, fields) {
    if (err) throw err;
    console.log(fields);
  });
});
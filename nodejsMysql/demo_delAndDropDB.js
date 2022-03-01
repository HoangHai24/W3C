var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mydbTest3"
});

con.connect(function(err) {
  if (err) throw err;
  var sqlDelRecord = "delete from customers where address = 'Mountain 21'";
  var sqlDelTable = "drop table customers"; 
  con.query(sqlDelTable, function (err, result) {
    if (err) throw err;
    console.log("Table deleted");
  });
});


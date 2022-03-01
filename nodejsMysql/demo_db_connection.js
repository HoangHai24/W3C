var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: 'mytestdb'
  });
  
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    con.query("SELECT * FROM EMPLOYEES", function(err, result){
        if(err) throw err;
        console.log(JSON.stringify(result))
    })
  });
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mydbTest3"
});

con.connect(function(err) {
  if (err) throw err;
  var sql = "select users.name as user, products.name as favorite from users left join products on users.favorite_product=products.id";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});


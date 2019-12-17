var mysql = require('mysql');
let result;
module.exports.connect=(matcher)=> {
  var mysql      = require('mysql');
  var connection = mysql.createConnection({
  host     : 'localhost',
  port     : 3306,
  user     : 'root',
  password : '',
  database : 'node_db'
});
connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  // console.clear();
  console.log('Database Connected');
});
let value = matcher;
let queryst= `select * from emp where name='${value}'`;
connection.query(queryst, function (err, data) {
     if (err) console.log(err);
     else {
     console.table(data);
     result = data;
     }
});
connection.end(function () {       
    console.log('Connection Closed');
});
}
module.exports.result = result;
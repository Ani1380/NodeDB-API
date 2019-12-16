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
  console.log('Database Connected');
});
let value = matcher;
let queryst= `select * from emp where name='${value}'`;
connection.query(queryst, function (err, data) {
     if (err) console.log(err);
     else {
     console.log(data);
     // result = data;
     }
});
connection.end(function () {       
    console.log('connection Closed');
});

// ibmdb.open("DATABASE=TEST;HOSTNAME=localhost;UID=ROUNAK;PWD=Farcry@5;PORT=50000;PROTOCOL=TCPIP", function (err,conn) {
//   if (err) return console.log(err);
//   let value=matcher;
//   let queryst=`select * from CROUTINE as CROUTINE where ='${value}'`;
//   conn.query(queryst, function (err, data) {
//     if (err) console.log(err);
//     else {
//     console.log(data);
//     result=data;
//     }
//     conn.close(function () {
//       console.log('connection closed');
//     });
//   });
// });
// console.log(result);
// return result;
}
module.exports.result = result;
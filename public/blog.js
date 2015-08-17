//var entries = [];

var mysql      = require('mysql');

function connectToMysql() {
  this.connection = {};
  this.entries = [];
}

connectToMysql.prototype.connect1 = function() {
  this.connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'songjianhua',
    database : 'TW'
  });
};

connectToMysql.prototype.close1 = function() {
  this.connection.end();
};

connectToMysql.prototype.getBlogEntries = function(sql) {
    var that = this;
    this.connection.query(sql, function(err, rows, fields) {
    if (err) throw err;
      that.entries = rows;
      console.log(that.entries);
  });
};

connectToMysql.prototype.delete = function(str) {
      console.log(str);
      var that = this;
      this.connection.query(str, function(err, rows, fields) {
      if (err) throw err;
  });
};


module.exports = connectToMysql;

//var connection;

// function conn() {
//   var connection = mysql.createConnection({
//   host     : 'localhost',
//   user     : 'root',
//   password : 'songjianhua',
//   database : 'TW'
// });
// }
// exports.start1 = function() {
// connection.connect();
// };
// exports.getBlogEntries = function() {
//   if(entries.length === 0) {
//     console.log(entries.length);
//     connection.query('select * from score', function(err, rows, fields) {
//     if (err) throw err;
//     entries = rows;
//     console.log(entries.length);
//   });
// }
//
//   if(entries.length !== 0) {
//     console.log(entries);
//      return entries;
//    }
// };
//
// exports.getfun = function(str) {
//     console.log(str);
//     connection.query(str, function(err, rows, fields) {
//     if (err) throw err;
//     entries = rows;
//     console.log('------------------------xxxxxx');
//     console.log(entries);
//     console.log("------------------------xxxxxxx");
//   });
// };
//
// exports.clos = function() {
//   connection.end();
// };

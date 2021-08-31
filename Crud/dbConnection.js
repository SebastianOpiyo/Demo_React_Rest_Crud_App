
const mysql = require('mysql');


let mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'p@55w0rd',
    database: 'crud_demo'
});

// Call the connection
mysqlConnection.connect(function(err) {
    if (err) {
      return console.error('error: ' + err.message);
    }
  
    console.log('Connected to the MySQL server.');
  });
  

  module.exports = mysqlConnection;
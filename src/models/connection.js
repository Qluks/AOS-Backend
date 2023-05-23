const mysql = require('mysql2/promise');
require('dotenv').config();

const connection = mysql.createPool({
  host: "containers-us-west-207.railway.app",
  user: "root",
  password: "2dEMuDvizuqrzY48nVSu",
  database: "railway"
});

module.exports = connection;

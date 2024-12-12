const mysql = require('mysql2');

// Create a connection pool to MySQL
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// Promisify query method to use async/await
const promisePool = pool.promise();

module.exports = promisePool;
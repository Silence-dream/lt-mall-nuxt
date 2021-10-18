var mysql = require('mysql');
var pool = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'letao'
});

// 创建连接
/**
 *
 * @param {String} sql
 * @param {Array}  params[]
 */
module.exports.query = (sql, params) => {
  return new Promise((resolve, reject) => {
    // 开始连接数据
    pool.getConnection(function (err, connection) {
      if (err) throw err; // not connected!

      // Use the connection
      connection.query(sql, params, function (error, results, fields) {
        // When done with the connection, release it.
        connection.release();

        // Handle error after the release.
        if (error) throw error;

        // Don't use the connection here, it has been returned to the pool.
        resolve(results);
      });
    });
  });
}
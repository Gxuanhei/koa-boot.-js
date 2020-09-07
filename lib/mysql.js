/**
 * Greated By xuanhei on 2020/9/7
 **/

const mysql = require('mysql')
const config = require('../Config/mysqlConfig')
const pool  = mysql.createPool({...config.database});
console.log("连接数据库成功")
const query = function( sql, values ) {
    return new Promise(( resolve, reject ) => {
        pool.getConnection(function(err, connection) {
            if (err) {
                resolve( err )
            } else {
                connection.query(sql, values, ( err, rows) => {
                    if ( err ) {
                        reject( err )
                    } else {
                        resolve( rows )
                    }
                    connection.release()
                })
            }
        })
    })
}

module.exports={query}
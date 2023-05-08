const mysql = require('mysql2');

const dbPool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'portal_otomatis_dev'
});

module.exports = dbPool;
const mysql = require('mysql2');

// Connect to databasse
const db = mysql.createConnection(
    {
        host: 'localhost',
        // your MySql username
        user: 'travis',
        // your MySql password
        password: 'pew',
        database: 'election'
    },
    console.log('Connected to the election database.')
);

module.exports = db;
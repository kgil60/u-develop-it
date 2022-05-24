const mysql = require('mysql2');

// Connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: '*sV3+%kMs!3M1O2Z',
        database: 'election'
    },
    console.log('Connected to election database')
)

module.exports = db;
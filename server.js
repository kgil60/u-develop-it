const express = require('express');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;

const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

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

db.query('SELECT * FROM candidates', (err, rows) => {
    console.log(rows);
})

// Default response for any other request
app.use((req, res) => {
    res.status(404).end();
})

app.listen(PORT, () => {
    console.log('Server running on port ' + PORT);
})
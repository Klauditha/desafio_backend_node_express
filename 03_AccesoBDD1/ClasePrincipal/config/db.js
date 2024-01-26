
const {Pool} = require('pg');

require('dotenv').config();

console.log(process.env.DB_USER);


console.log(process.env.DB_DATABASE);

const pool = new Pool({
    
    user: process.env.DB_USER || 'postgres',
    host: process.env.DB_HOST || 'localhost',
    database: process.env.DB_DATABASE || 'books',
    password: process.env.DB_PASSWORD || 'root',
    port: 5432,
    allowExitOnIdle: true
});

const getData = async () => {
 
    const res = await pool.query('SELECT NOW()');
    console.log(res.rows);
    return res.rows;
}

getData();

module.exports = {pool};


const {Pool} = require('pg');
require('dotenv').config();

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    allowExitOnIdle: true
});

const getData = async () => {
    const results = await pool.query('SELECT NOW()');
    console.log(results.rows);
    return results.rows
}
module.exports = pool
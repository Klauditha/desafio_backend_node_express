const {pool} = require('./config/db');

const getBooks = async (name,editorial,autor,precio) => {

    const {rows} = await pool.query(
        "SELECT * FROM books"
    );
    console.log(rows);
    return rows;
}

module.exports = {
    getBooks
}
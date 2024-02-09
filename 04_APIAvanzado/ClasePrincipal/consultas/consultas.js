const pool = require('../config/db');
const format = require('pg-format');

const getProducts = async ({ limit = 10 }) => {
  try {
    console.log(limit);
    const { rows: results } = await pool.query(
      'SELECT * FROM ferreteria LIMIT $1',
      [limit]
    );
    return results;
  } catch (error) {
    console.log(error);
  }
};

const getProductsOrder = async ({ limit = 10, orderby = 'nombre_DESC' }) => {
  try {
    const [campo, direccion] = orderby.split('_');
    console.log(campo, direccion, limit);
    const formatQuery = format(
      'SELECT * FROM ferreteria ORDER BY %I %s LIMIT %L',
      campo,
      direccion,
      limit
    );
    pool.query(formatQuery);
    const { rows: products } = await pool.query(formatQuery);
    return products;
  } catch (error) {
    console.log(error);
  }
};

//PAGINACION
const getProductsPagination = async ({
  limit = 10,
  //page = 0,
  page = 1,
  orderby = 'nombre_DESC',
}) => {
  try {
    const [campo, direccion] = orderby.split('_');
    //const offset = page * limit;
    const offset = (page-1) * limit;
    const formatQuery = format(
      'SELECT * FROM ferreteria ORDER BY %I %s LIMIT %L OFFSET %L',
      campo,
      direccion,
      limit,
      offset
    );
    const { rows: products } = await pool.query(formatQuery);
    return products;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getProducts,
  getProductsOrder,
  getProductsPagination,
};

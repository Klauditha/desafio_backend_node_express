const express = require('express');
const router = express.Router();
const {
  getProducts,
  getProductsOrder,
  getProductsPagination,
} = require('../consultas/consultas');

//http://localhost:3000/products?limit=3
router.get('/products', async (req, res) => {
  try {
    const queryString = req.query;
    console.log(queryString);
    const products = await getProducts(queryString);
    res.send(products);
  } catch (error) {
    res.status(500).send('Error en el servidor');
  }
});

/*http://localhost:3000/product/order?limit=2&orderby=nombre_DESC*/
/*http://localhost:3000/product/order?limit=2&order_by=nombre_DESC*/
router.get('/product/order', async (req, res) => {
  try {
    const queryString = req.query;
    console.log(queryString);
    const products = await getProductsOrder(queryString);
    res.send(products);
  } catch (error) {
    res.status(500).send('Error en el servidor');
  }
});

/*http://localhost:3000/product/pagination?limit=2&page=0&orderby=nombre_DESC*/
/*http://localhost:3000/product/pagination?limit=3&orderby=id_DESC&page=10*/
router.get('/product/pagination', async (req, res) => {
  try {
    const queryString = req.query;
    console.log(queryString);
    const products = await getProductsPagination(queryString);
    res.send(products);
  } catch (error) {
    res.status(500).send('Error en el servidor');
  }
});

module.exports = router;

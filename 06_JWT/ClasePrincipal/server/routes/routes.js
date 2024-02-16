const express = require("express");
const { getConsultas } = require("../consultas/consultas");

const router = express.Router();


router.get('/', (req, res) => {

    res.send('Hello World! desde servidor')
})


router.get('/users', async (req, res) => {

    try {
        const consultas = await getConsultas();
        res.json(consultas);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})


module.exports = router
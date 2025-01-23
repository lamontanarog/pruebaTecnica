const express = require('express');
const router = express.Router();
const { createTest, getTests, getTestById } = require('../controllers/testController');

// Crear prueba técnica
router.post('/', createTest);

// Obtener todas las pruebas técnicas
router.get('/', getTests);

// Obtener una prueba técnica por ID
router.get('/:id', getTestById);

module.exports = router;

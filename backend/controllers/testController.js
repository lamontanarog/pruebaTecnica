const Test = require('../models/Test');

const createTest = async (req, res) => {
    try {
        const { type, question, solution } = req.body;

        //validacion

        if (type === 'generacion de codigo' && !solution) {
            return res.status(400).json({ error: 'La solucion es obligatoria para la generacion de codigo' });
        }
        const newTest = new Test({ type, question, solution });
        await newTest.save();
        res.status(201).json({ message: 'prueba tecnica creada exitosamente', test: newTest });
    } catch (error) {
        res.status(500).json({ error: 'Error al crear la prueba tecnica.', detail: error.message });
    }
}


// obtener todas las pruebas tecnicas

const getTests = async (req, res) => {
    try {
        const tests = await Test.find();
        res.status(200).json(tests)
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener las pruebas tecnicas', details: error.message })
    }
}

// obtener una prueba tecnica por id

const getTestById = async (req, res) => {
    try {
        const { id } = req.params;
        const test = await Test.findById(id);
        if (!test) {
            return res.status(404).json({ error: 'Prueba tecnica no encontrada' });
        }
        res.status(200).json(test);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener la prueba tecnica', details: error.message });
    }
}

module.exports = { createTest, getTests, getTestById }
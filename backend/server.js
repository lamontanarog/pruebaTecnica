const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

//midlewares
app.use(cors());
app.use(express.json());

//Conexion a mongo

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000,
  })
    .then(() => console.log('Conectado a la base de datos'))
    .catch((error) => {
      console.error('Error al conectar a la base de datos:', error.message);
      process.exit(1);
    });
  
//Rutas
app.use('/api/tests', require('./routes/testRoutes'));

//Puerto
app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en el puerto ${process.env.PORT}`)
});
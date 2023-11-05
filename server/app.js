require('dotenv').config()

const cors = require("cors")
const express = require("express")
const morgan = require("morgan")
const fileUpload = require('express-fileupload')
const { UPLOADS_DIR } = require('./src/utils/constants')

const routes = require('./src/routes');

const { errorController, notFoundController } = require('./src/controllers/errors')

const app = express()

app.use(express.static(UPLOADS_DIR))

app.use(express.json())

app.use(fileUpload())

app.use(morgan('dev'))

app.use(cors())

// Agregar las autorizaciones de CORS aquí
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // Permite solicitudes desde cualquier origen (cambia '*' por tu origen permitido si es específico).
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE'); // Especifica los métodos permitidos.
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // Especifica los encabezados permitidos.
    next();
})

app.use(routes)

app.use(notFoundController)

// eslint-disable-next-line no-unused-vars
app.use(errorController)

app.listen(process.env.PORT, () => {
    console.log(`Server listening at http://localhost:${process.env.PORT}`);
});


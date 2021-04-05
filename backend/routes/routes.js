const express = require('express')
const router = express.Router()
const { listadoVehiculos } = require('./wsController')

router.get('/vehiculos', listadoVehiculos)

module.exports = router
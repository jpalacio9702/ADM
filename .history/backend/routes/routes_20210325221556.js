const express = require('express')
const router = express.Router()
const { listadoVehiculos } = require('./wsController')

// GET all
router.get('/vehiculos', listadoVehiculos)

module.exports = router
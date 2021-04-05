const express = require('express')
const router = express.Router()
const { listadoVehiculos } = require('./wsController')

// GET all
router.get('/', listadoVehiculos)

module.exports = router
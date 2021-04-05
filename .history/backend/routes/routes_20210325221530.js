const express = require('express')
const router = express.Router()
const { authClient } = require('./wsController')

// GET all
router.get('/', listadoVehiculos)

module.exports = router
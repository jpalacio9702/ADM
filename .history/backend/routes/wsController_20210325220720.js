const express = require( 'express' );
const router  = express.Router();

const wsClient = require( '../services/wsClient' );

router.get( '/listadoVehiculos', async( req, res ) => {
    const autos = await Auto.find();
    res.send( autos );
});
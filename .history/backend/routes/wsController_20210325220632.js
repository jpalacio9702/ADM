const express = require( 'express' );
const router  = express.Router();

const wsClient = require( '../services/wsClient' );

router.get( '/list', async( req, res ) => {
    const autos = await Auto.find();
    res.send( autos );
});
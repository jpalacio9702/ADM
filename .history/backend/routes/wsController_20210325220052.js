const express = require( 'express' );
const router  = express.Router();

const  = require( '' );

router.get( '/listaAutos', async( req, res ) => {
    const autos = await Auto.find();
    res.send( autos );
});
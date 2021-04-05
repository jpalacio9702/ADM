const express = require( 'express' );
const router  = express.Router();

const Auto = require( '../model/auto' );

router.get( '/listaAutos', async( req, res ) => {
    const autos = await Auto.find();
    res.send( autos );
});
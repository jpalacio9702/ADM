const cors     = require( 'cors' );
const express  = require( 'express' );
const user     = require( './routes/routes' );
const app      = express();

app.use( cors() );
app.use( express.json() );
app.use( '/lista', user );

const port = process.env.port || 3000;

app.listen( port, () => {
    console.log( "Ejecutando en el puerto", port );
});

const cors     = require( 'cors' );
const express  = require( 'express' );
const mongoose = require( 'mongoose' );
const user     = require( './routes/user' );
const app      2= express();

app.use( cors() );
app.use( express.json() );
app.use( '/login', user );

const port = process.env.port || 3000;

mongoose.connect( "mongodb://localhost/ADM", {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true,
}).then( ()=> {
    console.log( "conexion con mongo: on" );
}).catch(( error ) => {
    console.log( "conexion con mongo: off", error );
});

app.listen( port, () => {
    console.log( "Ejecutando en el puerto", port );
});
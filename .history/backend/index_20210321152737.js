const cors     = require( 'cors' );
const express  = require( 'express' );
const mongoose = require( 'mongoose' );
const user     = require( './routes/user' );
const app      = express();

app.use( cors() );
app.use( express.json() );
app.use( '/login', user );

// const port = process.env.port || 3000;

// app.listen( port, () => {
//     console.log( "Ejecutando en el puerto", port );
// });

// mongoose.connect( "mongodb://localhost/ADM", {
//     useNewUrlParser: true,
//     useFindAndModify: false,
//     useCreateIndex: true,
//     useUnifiedTopology: true,
// }).then( ()=> {
//     console.log( "conexion con mongo: on" );
// }).catch(( error ) => {
//     console.log( "conexion con mongo: off", error );
// });

var WebSocketClient = require('websocket').client;

var client = new WebSocketClient();

client.on('connectFailed', function(error) {
    console.log('Connect Error: ' + error.toString());
});

client.on('connect', function(connection) {
    console.log('WebSocket Client Connected');
    connection.on('error', function(error) {
        console.log("Connection Error: " + error.toString());
    });
    connection.on('close', function() {
        console.log('echo-protocol Connection Closed');
    });
    connection.on('message', function(message) {
        if (message.type === 'utf8') {
            console.log("Received: '" + message.utf8Data + "'");
        }
    });
    
    client.onopen = function() {
        console.log(client.readyState);
    
        // function sendNumber() {
        //     if (client.readyState === client.OPEN) {
        //         var number = Math.round(Math.random() * 0xFFFFFF);
        //         client.send(number.toString());
        //         setTimeout(sendNumber, 1000);
        //     }
        // }
        // sendNumber();
    };
});
// CMD=WS_SWITCH&&&Masivo&&&
client.connect('ws://sitesas.com:9999/', 'echo-protocol');


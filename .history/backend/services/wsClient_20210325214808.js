const cors     = require( 'cors' );
const express  = require( 'express' );
const app      = express();

app.use( cors() );
app.use( express.json() );
app.use( '/login', user );

const WebSocketClient = require('websocket').client;

const client = new WebSocketClient();

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

    function sendNumber() {
        console.log("ENTRO");
        if (connection.connected) {
            var number = Math.round(Math.random() * 0xFFFFFF);
            connection.sendUTF("CMD=WS_SWITCH&&&Masivo&&&");
            setTimeout(sendNumber, 1000);
        }
    }
    sendNumber();
});
client.connect('ws://sitesas.com:9999/', 'echo-protocol');

const WebSocketClient   = require('websocket').client;

const client = new WebSocketClient();

client.on('connectFailed', function(error) {
    console.log('Connect Error: ' + error.toString());
});

const vehiculos =  client.on('connect', function(connection) {
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
            connection.sendUTF("CMD=WS_SWITCH&&&Masivo&&&");
        }
    }
    sendNumber();
});
client.connect('ws://sitesas.com:9999/', 'echo-protocol');

module.exports = { vehiculos }

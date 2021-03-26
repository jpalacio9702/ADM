/**
* wsServer.js
* version 1.0
* Websocket server , review and communications on wsClients
**/

// Instancia de ws server
var WebSocketServer = require('ws').Server;
// Se crea el websock en un puerto
var wss             = new WebSocketServer({ port: sails.config.wsServerPort });

sails.on('lifted', function() {
    
    
    console.log('Init wsServer');
    
    wss.on('connection', function connection(ws) {

    var client_info         = { 'ip'                : ws.upgradeReq.connection.remoteAddress, 
                                'wsServerInterval'  : sails.config.wsServerInterval
                              };
    var toSend              = false;
    var command             = '';
    var commandValues       = '';
    
    // OnMessage Authentication
    // escucha los mensajes de los clientes 
    ws.on('message', function(message) {
        
        console.log(message);
        if(message) {
            // attemp to match if command present // /CMD=WS_(\w+)|(&{3}(.*)&{3})/ but not works so 2 lines to make it work
            command         = message.match(/CMD=WS_(\w+)/);
            commandValues   = message.match(/(&{3}(.*)&{3})/);
          
            // if command detected
            if(command && command[1]) {
                command = command[1];
                console.log( 'client command : ' + command );
            }
            
            // command values
            if(command && commandValues && commandValues[1]) {
                commandValues = commandValues[1];
                commandValues = commandValues.replace(/&&&/g,'');
                console.log( 'command values : ' + commandValues );
            }
            
            switch( command ) {
                case 'SWITCH':
                        console.log('Switch to ' + commandValues);
                        if(commandValues != ''){
                            toSend = commandValues;
                            console.log(" Witch To Stream Data of ::"+toSend);
                        }
                        break;
                case 'INTERVAL':
                        console.log('Interval to ' + commandValues);
                        if( ! isNaN(commandValues) ){
                            client_info['wsServerInterval']
                            console.log('Interval to ' + commandValues);
                        }
                        break;
                case 'COMMAND':
                        if(command && commandValues){
                            setCommand(commandValues);
                            console.log('Vehicle Command send');
                        }
                        break;
                default:
                        // other messages
                        console.log('Unknow command'); 
                        break;
            }// avaliable commands
        }// eval for sys command
    });

    
    /*
    * @method Interval to emit data client
    **/
    var id = setInterval(function() {
        try { ws.send( JSON.stringify( filterVehicle(toSend) ) );  }
        catch (e) { console.log('client drop connection'); }
    }, client_info['wsServerInterval']);
        
    console.log('Started Client');
    /*
    * @method on.close() :: on close connection
    */
    ws.on('close', function() {
        var client_info = {};
        var toSend      = false;
        console.log('Stop Client');
        clearInterval(id);
    }); 
 });
    
});

/**
* @method filter( requested ) :: filter vehicles to stream on ws client
* @param  <array> :: vehicles :: vehicles keys
* @param  <array> :: vehicles :: vehicles data
* @return <array> :: vehicles data from vehicles global
**/
function filterVehicle(requested){
    var temp = new Array();
    if(requested != false)
        for(var i in sails.config.dataVehicle)
                if((requested && sails.config.dataVehicle[i].data.type == requested))  {
                    temp.push( sails.config.dataVehicle[i].getInfo() );
                }
    return temp;
}

/**
* @method setCommand(data) :: sendMessage to vehicle
* @param    <string>   :: data string message format required : COMMAND @&@ VEHICLE_ID
* @return   <string>   :: send command to console.
* @requires sails.config.wsServerData.sockets[x].myComs.sendkey to be set at wsClient
* @requires sails.config.wsServerData.sockets[x].myComs = wsClient object at server side
**/
function setCommand(data) {
    // @todo add documentation
    var myMessage   = data.split(/(@&@)/);
    var message     = myMessage[0]; 
    var vehicle     = myMessage[2];
    if( myMessage && message && vehicle ){
        console.log('set command ' + message + ' to vehicle ' + vehicle );
        
        if(sails.config.dataVehicle[ vehicle ]) 
        {
            for(var x in sails.config.wsServerData.sockets) 
            {
             if( sails.config.wsServerData.sockets[x].name == sails.config.dataVehicle[vehicle].data.type)
              {
                if(sails.config.dataVehicle[vehicle].data.IME)
                {
    
    console.log('command:'+sails.config.dataVehicle[vehicle].data.IME+'<:>'+ message+sails.config.wsServerData.sockets[x].myComs.sendkey);
                    
    sails.config.wsServerData.sockets[x].myComs.send('command:'+sails.config.dataVehicle[vehicle].data.IME+'<:>'+ message+sails.config.wsServerData.sockets[x].myComs.sendkey);
                    
                }else {
                    console.log('Deny as no IME');
                }
              }else 
                console.log('.. as no dataType');
           }
    }else 
        console.log('.. as no vehicle');
 }
}
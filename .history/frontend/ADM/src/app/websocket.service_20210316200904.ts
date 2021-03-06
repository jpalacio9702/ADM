import { Injectable } from '@angular/core';
import { webSocket } from 'rxjs/webSocket';
const subject = webSocket("ws://localhost:8081");

subject.subscribe(
   msg => console.log('message received: ' + msg), // Called whenever there is a message from the server.
   err => console.log(err), // Called if at any point WebSocket API signals some kind of error.
   () => console.log('complete') // Called when connection is closed (for whatever reason).
 );
import { Injectable } from '@angular/core';
import { WebsocketService } from './websocket.service';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  messages: Subject<any>;
  private servicio: any;

  // Our constructor calls our wsService connect method
  constructor(private wsService: WebsocketService) {
    
    this.servicio = <Subject<any>>this.wsService.connect();
    this.messages = this.servicio.map((response: any): any => {
      return response;
    })
   }

  // Our simplified interface for sending
  // messages back to our socket.io server
  sendMsg(msg: string) {
    this.messages.next(msg);
  }
}

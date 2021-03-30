import { Injectable } from '@angular/core';
import { Observable, Subject } from "rxjs/Rx";
import { WebSocketMasivoService } from "./web-socket-masivo.service";


const CHAT_URL = "ws://echo.websocket.org/";
const CHAT_SITESAS = "ws://sitesas.com:9999/";

export interface Message {
  author: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class MasivoService {

  public messages: Subject<Message>;

  constructor(wsService: WebSocketMasivoService) {
    this.messages = <Subject<Message>>wsService.connect(CHAT_SITESAS).map(
      (response: MessageEvent): Message => {
        let data = JSON.parse(response.data);
        return {
          author: data.author,
          message: data.message
        };
      }
    );
  }
}

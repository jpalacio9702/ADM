import { Injectable } from '@angular/core';
import { Observable, Subject } from "rxjs/Rx";
import { WebSocketMasivoService } from "./web-socket-masivo.service";


const CHAT_URL = "ws://echo.websocket.org/";

export interface Message {
  author: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class MasivoService {

  public messages: Subject<Message>;

  constructor(wsMasivoService: WebSocketMasivoService) {
    this.messages = <Subject<Message>>wsMasivoService.connect(CHAT_URL).map(
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

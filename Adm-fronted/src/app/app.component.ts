import { Component } from '@angular/core';
import { WebSocketMasivoService } from "./services/masivo/web-socket-masivo.service";
import { MasivoService } from "./services/masivo/masivo.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  providers: [WebSocketMasivoService, MasivoService]
})
export class AppComponent {
  title = 'Adm-fronted';
  constructor(private masivoService: MasivoService) {
    masivoService.messages.subscribe(msg => {
      console.log("Response from websocket: " + msg);
    });
  }

  private message = {
    author: "Legarda",
    message: "CMD=WS_SWITCH&&&Masivo&&&"
  };

  sendMsg() {
    console.log("new message from client to websocket: ", this.message);
    this.masivoService.messages.next(this.message);
    this.message.message = "";
  }

}

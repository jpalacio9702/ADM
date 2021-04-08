import { Component } from '@angular/core';
import { WebSocketMasivoService } from "./services/masivo/web-socket-masivo.service";
import { MasivoService } from "./services/masivo/masivo.service";
import { PrincipalComponent } from "./pages/principal/principal.component";
import { mdiBusAlert } from '@mdi/js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  providers: [WebSocketMasivoService, MasivoService, PrincipalComponent]
})

export class AppComponent {
  lista: any = [];
  title = 'Adm-fronted';

  constructor(private masivoService: MasivoService) {
    masivoService.messages.subscribe(msg => {
      console.log("Response from websocket: " + msg);
    });
  }

  private message = {
    author: "Sitesas",
    message: "CMD=WS_SWITCH&&&Masivo&&&"
  };

  sendMsg() {
    console.log("new message from client to websocket: ", this.message);
    this.masivoService.messages.next(this.message);
    
  }

}

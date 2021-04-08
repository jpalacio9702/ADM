import { Component, OnInit } from '@angular/core';
import { WebSocketMasivoService } from "src/app/services/masivo/web-socket-masivo.service"
import { MasivoService } from "src/app/services/masivo/masivo.service";
import { PrincipalComponent } from "../principal/principal.component";

@Component({
  selector: 'app-vehiculo',
  templateUrl: './vehiculo.component.html',
  styleUrls: ['./vehiculo.component.sass'],
  providers: [WebSocketMasivoService, MasivoService, PrincipalComponent]
})
export class VehiculoComponent implements OnInit {
  lista: any = [];
  constructor(private masivoService: MasivoService) {
  	masivoService.messages.subscribe(msg => {
      console.log("Response from websocket: " + msg);
    });
   }

  ngOnInit(): void {
  	this.masivoService.messages.next(this.message);
  }

  private message = {
    author: "Sitesas",
    message: "CMD=WS_SWITCH&&&Masivo&&&"
  };

  sendMsg() {
    this.masivoService.messages.next(this.message);
    
  }

}

import { Component, OnInit } from '@angular/core';


import { WebSocketMasivoService } from "src/app/services/masivo/web-socket-masivo.service";
import { MasivoService } from "src/app/services/masivo/masivo.service";

@Component({
  selector: 'app-listar-vehiculos',
  templateUrl: './listar-vehiculos.component.html',
  styleUrls: ['./listar-vehiculos.component.css']
})
export class ListarVehiculosComponent implements OnInit {

  constructor(private masivoService: MasivoService) {
  	masivoService.messages.subscribe(msg => {
        console.log("Response from websocket: " + msg);
      });
   }

  ngOnInit(): void {
  }

  private message = {
    author: "tutorialedge",
    message: "CMD=WS_SWITCH&&&Masivo&&&"
  };

  sendMsg() {
    console.log("new message from client to websocket: ", this.message);
    this.masivoService.messages.next(this.message);
    this.message.message = "";
  }



}

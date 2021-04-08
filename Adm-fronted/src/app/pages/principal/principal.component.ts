import {Component, OnInit} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MasivoService} from '../../services/masivo/masivo.service';
// import { WebSocketMasivoService } from "../../services/masivo/web-socket-masivo.service";

/**
 * @title Testing with MatCardHarness
 */
@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.sass'],
  providers: [MasivoService]
})
export class PrincipalComponent implements OnInit {
  lista: any = [];
  constructor( private vehiculos: MasivoService ) {}

  ngOnInit(): void {
    this.vehiculos.vehiculos.subscribe(
      (res) => {
        this.lista = res;
      },
      ( error ) => {
        console.log( error );
      }
    );
  }
}
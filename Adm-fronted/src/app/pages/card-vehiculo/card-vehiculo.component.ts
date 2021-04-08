import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-vehiculo',
  templateUrl: './card-vehiculo.component.html',
  styleUrls: ['./card-vehiculo.component.sass']
})
export class CardVehiculoComponent implements OnInit {

    @Input() vehiculo: {
    code: '',
    lat: '',
    long: ''
    vel: 0,
    type: '',
    odo: 0
  };

  constructor() { }

  ngOnInit(): void {
  }

}

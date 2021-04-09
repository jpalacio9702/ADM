import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-vehiculo',
  templateUrl: './card-vehiculo.component.html',
  styleUrls: ['./card-vehiculo.component.sass']
})
export class CardVehiculoComponent implements OnInit {

    @Input() vehiculo: {
    
  };

  constructor() { }

  ngOnInit(): void {
  }

}

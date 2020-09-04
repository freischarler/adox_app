import { Component, OnInit } from '@angular/core';
import { ViajeService } from '../../services/viaje.service';

import { ViajeI } from '../../models/viaje';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

  viajes:ViajeI[]=[];

  constructor( private _viajeService : ViajeService ) { }

  ngOnInit(): void {
    this._viajeService.getViajes()
    .subscribe(
      (res)=>{
        //this.values=JSON.stringify(res);
        this.viajes=res;
        console.log(res);
      })
  }

}

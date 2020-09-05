import { Component, OnInit } from '@angular/core';
import { ViajeService } from '../../services/viaje.service';

import { ViajeI } from '../../models/viaje';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

  viajes:ViajeI[]=[];
  userLogged:String;

  constructor( private _viajeService : ViajeService,
                private _authService : AuthService ) { }

  ngOnInit(): void {

    this.userLogged=this._authService.getUser();
    if(this.userLogged=='admin'){
      this._viajeService.getViajes()
        .subscribe(
        (res)=>{
        //this.values=JSON.stringify(res);
        this.viajes=res;
        console.log(res);
        })
    }
    else{
      this._viajeService.getViajesByid(2)
        .subscribe(
        (res)=>{
        //this.values=JSON.stringify(res);
        this.viajes=res;
        console.log(res);
        })
    }
  
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { truck } from 'src/app/models/tracking';
import { TrackingService } from 'src/app/services/tracking.service';
import { LogsService } from 'src/app/services/logs.service';
import { Value } from '../../models/value';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.css']
})
export class LogsComponent implements OnInit {

  truck:truck;
  values:Value[];

  constructor( private activatedRoute: ActivatedRoute, 
    private _trackingService:TrackingService, private _logsService:LogsService
    ) {
    this.activatedRoute.params.subscribe( params =>{
      //console.log('BANDERA1'+params);
      this.truck=this._trackingService.getTruck( params ['id']);
    });
    //console.log(this.place);
    //this.values.reverse();
  }

  ngOnInit(): void {
    console.log(this.truck);
    console.log(this.truck.viaje_id);
    this._logsService.getValues( this.truck.viaje_id )
    .subscribe(
      (res)=>{
        //this.values=JSON.stringify(res);
        this.values=res;
        console.log(res);
        //this._valuesService.putList(res);

        //this._status=this._valuesService.getStats();

        //this.value_Tmax=this._valuesService.getMaximo();
        //this.minimo=this._valuesService.getMinimo();
      }
    ); 
  }

}

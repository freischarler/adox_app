import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TrackingService } from '../../services/tracking.service'; 
import { truck } from '../../models/tracking';

@Component({
  selector: 'app-tracking',
  templateUrl: './tracking.component.html',
  styleUrls: ['./tracking.component.css']
})
export class TrackingComponent implements OnInit {

  trucks:truck[]=[];

  constructor( private _router: Router,
                private _trackingService:TrackingService ) { }

  ngOnInit(): void {
    this._trackingService.getTrucks()
      .subscribe(
        (res)=>{
          this.trucks=res;
          console.log(res);
          this._trackingService.putList(this.trucks);
      }
      );
  }

  verLogs( idx:number ){
    this._router.navigate(['/logs',idx]);
  }
}

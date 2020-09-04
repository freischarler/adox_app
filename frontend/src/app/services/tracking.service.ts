import { Injectable } from '@angular/core';
import { truck } from '../models/tracking'
import { HttpClient , HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL="https://iot-crud-angular-nodejs-mysql.herokuapp.com/api"
const API_URL_TEST="http://localhost:3000";

@Injectable({
  providedIn: 'root'
})
export class TrackingService {

  //tracking:Tracking[]=[];

  trucks:truck[]=[];

  constructor(private http: HttpClient) { }
  
  getTrucks(): Observable<truck[]>{
    //console.log('servicio de trucks');
    return this.http.get<truck[]>(API_URL_TEST + '/api/tracking');
  }

  putList( tracking_list:truck[]){
    this.trucks=tracking_list;
  }

  getTruck( idx: string ){
    //verificar q el index sea mayor a 0
    //console.log(this.places[idx]);
    return this.trucks[idx];

  }

}

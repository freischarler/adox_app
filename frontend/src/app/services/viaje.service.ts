import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ViajeI } from '../models/viaje'

const API_URL="https://iot-crud-angular-nodejs-mysql.herokuapp.com/api"
const API_URL_TEST="http://localhost:3000";

@Injectable({
  providedIn: 'root'
})
export class ViajeService {

  viajes:ViajeI[]=[];

  constructor(private http: HttpClient) { }

  getViajes(): Observable<ViajeI[]>{
    //console.log(API_URL + '/values/'+idx);
    return this.http.get<ViajeI[]>(API_URL_TEST + '/api/reports');
  }

  getViajesByid( idx: number ): Observable<ViajeI[]>{
    //console.log(API_URL + '/values/'+idx);
    return this.http.get<ViajeI[]>(API_URL_TEST + '/api/reports/'+idx);
  }
  
}
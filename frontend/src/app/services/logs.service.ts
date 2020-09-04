import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Value } from '../models/value'

const API_URL="https://iot-crud-angular-nodejs-mysql.herokuapp.com/api"
const API_URL_TEST="http://localhost:3000";

@Injectable({
  providedIn: 'root'
})
export class LogsService {

  values:Value[]=[];

  constructor(private http: HttpClient) { }

  getValues( idx:number ): Observable<Value[]>{
    //console.log(API_URL + '/values/'+idx);
    return this.http.get<Value[]>(API_URL_TEST + '/api/logs/'+idx);
  }
}

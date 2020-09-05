import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserI } from '../models/user';
import { Observable, BehaviorSubject } from 'rxjs';

import * as moment from "moment";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class AuthService {

  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  private urlApi="http://localhost:3000";

  AUTH_SERVER: string = 'http://localhost:3000';
  authSubject = new BehaviorSubject(false);
  private token : string;

  constructor( private httpClient : HttpClient ) { }

  login ( user : UserI ){
    user=JSON.parse(JSON.stringify(user));
    return this.httpClient.post<any>(this.urlApi+`/api/auth/signin`, user);
    /*return this.httpClient.post<any>(this.urlApi+`/api/auth/signin`, user).pipe(tap(
      res=> this.setSession),shareReplay(1))*/
  }

  public getToken(): string {
    return localStorage.getItem('id_token');
  }

  public getUser() {
    return localStorage.getItem('rol_key');
    //return JSON.parse(localStorage.getItem('rol_key'));
  }

  public setSession( authResoult ) {
    const expiresAt = moment().add( authResoult.expiresIn,'second');
    localStorage.setItem('id_token', authResoult.token);
    localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()));
    localStorage.setItem('rol_key',authResoult.rol); 
  }

  logout(): void {
    this.token = '';
    localStorage.removeItem("id_token");
    localStorage.removeItem("expires_at");
  }

  public isLoggedIn(){
    return this.loggedIn.asObservable();
  }

  public isExpiredIn(){
    return moment().isBefore(this.getExpiration());
  }

  isLoggedOut(){
    //return !this.isLoggedIn();
    return !this.isExpiredIn();
  }

  getExpiration(){
    const expiration = localStorage.getItem("expires_at");
    const expiresAt = JSON.parse(expiration);
    return moment(expiresAt);
  }

  /*private saveToken( token : string, expiresIn : string): void{
    localStorage.setItem("ACCESS_TOKEN", token);
    localStorage.setItem("EXPIRES_IN", expiresIn);
    this.token = token;
  }
  


  private getToken(): string{
    if (!this.token){
      this.token=localStorage.getItem("ACCESS_TOKEN");
    }
    return this.token;
  }*/
  


}

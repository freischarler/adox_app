import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service'
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserI } from 'src/app/models/user';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})


export class NavbarComponent implements OnInit {

  isLoggedIn: Observable<boolean>;
  //userLogged: Observable<string>;

  constructor( private _authService : AuthService,
                private _router: Router) {
                  
                }

  ngOnInit(): void {
    
    this.isLoggedIn = this._authService.isLoggedIn;
    //this.userLogged=this._authService.UserType;
    //console.log(this.userLogged);
    
  }

  

  public get currentUser() {
    return this._authService.isAuthorized();
  }

  public logOut(){
    console.log('log out');
    
    this._authService.logout();
    this.isLoggedIn = this._authService.isLoggedIn;
    //this._router.navigate(['/auth/login']);

    
    //this.reloadPage();
  }

  /*reloadPage() {
    window.location.reload();
  }*/


}

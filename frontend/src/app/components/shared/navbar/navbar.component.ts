import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service'
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})


export class NavbarComponent implements OnInit {

  isLoggedIn = false;

  constructor( private _authService : AuthService,
                private _router: Router) {

                }

  ngOnInit(): void {
    /*FALTA CONFIGURAR EL TIEMPO DE TOKEN
    if (this._authService.getToken()) {
      this.isLoggedIn = true;
    }*/
  }


  public logOut(){
    console.log('log out');
    
    this._authService.logout();
    this._router.navigate(['/auth/login']);

    this.isLoggedIn = false;
    
    //this.reloadPage();
  }

  reloadPage() {
    
    window.location.reload();
    
  }
}

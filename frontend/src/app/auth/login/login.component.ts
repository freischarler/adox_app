import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { TokenStorageService } from '../../services/token-storage.service';
import { UserI } from '../../models/user';
import { NgForm }  from '@angular/forms';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLoggedIn = false;
  isLoginFailed = false;

  errorMessage = '';
  //roles: string[] = [];
  rol= '';

  usuario:UserI={
    id_usuario: 0,
    name: '',
    password: ''
  }

  submitted = false;
  
  constructor( private _authService: AuthService,
                private _router: Router,
                private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    if (this._authService.getToken()) {
      this.isLoggedIn = true;
      //this.roles = this._authService.getUser().roles;
      this.rol=this._authService.getUserKey();
      this._authService.setUser(this.usuario);
      console.log('rol asignado'+this.rol);
      //console.log(this.rol);
      this._router.navigateByUrl('/');
    }
  }

  // convenience getter for easy access to form fields
  //get f() { return this.loginForm.controls; }

  onLogin( forma: NgForm ):void{
    this.submitted = true;
    //console.log( forma );


    this._authService.login( forma.value ).
      subscribe(
        res => {
          //obtenemos el token y lo guardamos en el local Storge
          console.log(res);
          //localStorage.setItem('token',res.token);

          this._authService.setSession(res);
          
          
          this._router.navigate(['/home']);

          this.isLoginFailed = false;
          this.isLoggedIn = true;
          //this.roles = this.tokenStorage.getUser().roles;
          //this.reloadPage();

        },
        err => console.log(err)
        //this.errorMessage = err.error.message;
        //this.isLoginFailed = true;
      )
  }

  reloadPage() {
    window.location.reload();
  }

}

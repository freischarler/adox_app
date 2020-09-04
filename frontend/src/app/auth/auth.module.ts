import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component'
import { AuthService } from '../services/auth.service';
//import { RegisterComponent } from './register/register.component'


@NgModule({
  declarations: [  ],
  imports: [
    CommonModule,
    FormsModule,
    AuthRoutingModule,
    HttpClientModule
  ],
  providers: [ AuthService ]
})
export class AuthModule { }

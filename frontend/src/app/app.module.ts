import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './components/home/home.component';

import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { TrackingComponent } from './components/tracking/tracking.component';
import { AboutComponent } from './components/about/about.component';
import { ReportsComponent } from './components/reports/reports.component';
import { LogsComponent } from './components/logs/logs.component';
import { HttpClientModule, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';
import { ViajeService } from './services/viaje.service';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { AuthGuard } from './services/authGuard';

@NgModule({
  declarations: [
    AppComponent, LoginComponent, HomeComponent, NavbarComponent, TrackingComponent, AboutComponent, ReportsComponent, LogsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ AuthService, AuthGuard ,UserService, ViajeService, 
    {
      provide : HTTP_INTERCEPTORS,
      useClass : TokenInterceptorService,
      multi : true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }

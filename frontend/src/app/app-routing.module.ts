import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { TrackingComponent } from './components/tracking/tracking.component';
import { AboutComponent } from './components/about/about.component';
import { ReportsComponent } from './components/reports/reports.component';
import { LogsComponent } from './components/logs/logs.component';

import { AuthGuard } from './services/authGuard';

const routes: Routes = [

  { path: '*', redirectTo: '/auth/login', pathMatch : 'full'},
  { path: 'auth',loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)}, //el tutorial marcaba error, solucion: angular.io/guide/lazy-loading-ngmodules
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'tracking', component: TrackingComponent, canActivate: [AuthGuard]},
  { path: 'logs/:id', component: LogsComponent, canActivate: [AuthGuard] },
  { path: 'reports', component: ReportsComponent, canActivate: [AuthGuard] },
  { path: 'about', component: AboutComponent, canActivate: [AuthGuard] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes), FormsModule, ReactiveFormsModule],
  exports: [RouterModule, FormsModule, ReactiveFormsModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { TrackingComponent } from './components/tracking/tracking.component';
import { AboutComponent } from './components/about/about.component';
import { ReportsComponent } from './components/reports/reports.component';
import { LogsComponent } from './components/logs/logs.component';

const routes: Routes = [

  { path: 'asd', redirectTo: '/auth/login', pathMatch : 'full'},
  { path: 'auth',loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)}, //el tutorial marcaba error, solucion: angular.io/guide/lazy-loading-ngmodules
  { path: 'home', component: HomeComponent },
  { path: 'tracking', component: TrackingComponent },
  { path: 'logs/:id', component: LogsComponent },
  { path: 'reports', component: ReportsComponent },
  { path: 'about', component: AboutComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes), FormsModule, ReactiveFormsModule],
  exports: [RouterModule, FormsModule, ReactiveFormsModule]
})
export class AppRoutingModule { }

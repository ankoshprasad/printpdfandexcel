import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './service/auth-guard.service';

const routes: Routes = [
// { path: '', loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule) },
{ path: '', loadChildren: () => import('./components/login/login.module').then(m => m.LoginModule) },
{ path: 'home', loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule),canActivate: [AuthGuard] },
{ path: 'home/:test', loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule),canActivate: [AuthGuard] },
{ path: 'expenses', loadChildren: () => import('./components/dashboard/dashboard.module').then(m => m.DashboardModule),canActivate: [AuthGuard] }, 
{ path: '**', redirectTo: '' }
]



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from './authentication.guard';

const authModule = () => import('./authentication/authentication.module').then(x => x.AuthenticationModule);
const dashboardModule = () => import('./dashboard/dashboard.module').then(x => x.DashboardModule);
const formModule = () => import('./form/form.module').then(x => x.FormModule);

const routes: Routes = [{
  path: '', loadChildren:authModule
},
{
  path:'dashboard', loadChildren:dashboardModule,canActivate: [AuthenticationGuard]
},
{
  path:'', loadChildren:formModule
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[AuthenticationGuard]
})
export class AppRoutingModule { }

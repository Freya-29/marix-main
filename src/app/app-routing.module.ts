import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const authModule = () => import('./authentication/authentication.module').then(x => x.AuthenticationModule);
const dashboardModule = () => import('./dashboard/dashboard.module').then(x => x.DashboardModule);
const formModule = () => import('./form/form.module').then(x => x.FormModule);

const routes: Routes = [{
  path: '', loadChildren:authModule
},
{
  path:'dashboard', loadChildren:dashboardModule
},
{
  path:'', loadChildren:formModule
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

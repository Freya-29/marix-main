import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const authModule = () => import('./authentication/authentication.module').then(x => x.AuthenticationModule);
const dashboardModule = () => import('./dashboard/dashboard.module').then(x => x.DashboardModule);
const routes: Routes = [{
  path: '', loadChildren:authModule
},
{
  path:'dashboard', loadChildren:dashboardModule
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

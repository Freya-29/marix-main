import { NgModule } from '@angular/core';
import { FormComponent } from './form.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path:'form/:cid/:fid/:rid', component:FormComponent 
},
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormRoutingModule { }

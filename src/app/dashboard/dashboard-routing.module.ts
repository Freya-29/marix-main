import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditComponent } from './edit/edit.component';
import { HomeComponent } from './home/home.component';
import { SettingComponent } from './setting/setting.component';
import { ShareComponent } from './share/share.component';
import { TrackComponent } from './track/track.component';
import { ViewComponent } from './view/view.component';
import { CampaignComponent } from './helpers/campaign/campaign.component';
import { ReportComponent } from './view/report/report.component';
import { TrackCampaignComponent } from './helpers/track-campaign/track-campaign.component';
import { ChartComponent } from './view/chart/chart.component';

const routes: Routes = [
  {
    path:'',component:HomeComponent,
    children:[
      {path:'view',component:ViewComponent},
      {path:'view/report', component: ReportComponent},
      {path:'view/chart',component:ChartComponent},
      {path:'campaign', children:[
        {path:"",component:CampaignComponent},
        {path:"share/:id",component:ShareComponent}
      ]},
      {path:'track', children : [
        { path : "" , component : TrackCampaignComponent } , 
        { path : "campaign/:id" , component : TrackComponent }
      ]      
      },
      {path:'setting',component:SettingComponent},
      {path:'edit',component:EditComponent},
      
    ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }

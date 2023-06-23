import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';
import { ShareComponent } from './share/share.component';
import { TrackComponent } from './track/track.component';
import { SettingComponent } from './setting/setting.component';
import { HomeComponent } from './home/home.component';
import { CampaignComponent } from './helpers/campaign/campaign.component';
import { FormModule } from '../form/form.module';
import { ReportComponent } from './view/report/report.component';
import { TrackCampaignComponent } from './helpers/track-campaign/track-campaign.component';
import { ChartComponent } from './view/chart/chart.component';



@NgModule({
  declarations: [
    ViewComponent,
    EditComponent,
    ShareComponent,
    TrackComponent,
    SettingComponent,
    HomeComponent,
    CampaignComponent,
    ReportComponent,
    TrackCampaignComponent,
    ChartComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormModule,
  ],

  schemas: [

    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
})
export class DashboardModule { }

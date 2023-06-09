import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { UserLoginComponent } from './user-login/user-login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AlertComponent } from './alert/alert.component';


@NgModule({
  declarations: [
    UserLoginComponent,
    AlertComponent
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    ReactiveFormsModule
  ]
})
export class AuthenticationModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { AccountsRoutingModule } from './accounts-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [
     CommonModule,
    AccountsRoutingModule, //BrowserModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class AccountsModule { }
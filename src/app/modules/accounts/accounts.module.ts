import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AccountsRoutingModule } from './accounts-routing.module';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    AccountsRoutingModule, 
    ReactiveFormsModule,
  ]
})
export class AccountsModule { }
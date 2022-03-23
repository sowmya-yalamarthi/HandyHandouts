import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountsModule } from './modules/accounts/accounts.module';
import { ContentComponent } from './components/content/content.component';
import { SharedModule } from './modules/shared/shared.module';
import { GeneralserviceService } from './services/generalservice.service';
import { JwtInterceptor } from './helpers/_helpers/jwt.interceptors';

import { AuthModule } from '@auth0/auth0-angular';


@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AccountsModule,
    SharedModule,

    AuthModule.forRoot({
      domain: "dev-49w0jms8.us.auth0.com",
      clientId: "NV8VWjY0eAEszULbpuyyBC7RGx94wnI6",
    }),


  ],
  providers: [GeneralserviceService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
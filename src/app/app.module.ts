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
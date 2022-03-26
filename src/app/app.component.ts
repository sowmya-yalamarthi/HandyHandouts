import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GeneralserviceService } from './services/generalservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angularproject';

  constructor(private service: GeneralserviceService, private router : Router,) { }

  value = '';
  displayMessages: any;

  navigateToLogin() {
    this.router.navigate(["/accounts"])
  }

  navigateToRegister() {
    this.router.navigate(["/accounts/register"])
  }

  onClickOfMessageSave() {
    if (this.value != '') {
      let reqObj = {
        name: 'test',
        message: this.value
      }
      console.log('message value', this.value)
      this.service.saveMessage(reqObj).subscribe((data: boolean) => {
        if (data) {
          this.value = ''
          console.log(data)
        }
      })
    }
  }

  onClickOfGetMessage(){
    this.service.getMessage().subscribe((data : any) => {
      if(data){
         this.displayMessages = data;
      }
    })
  }
  logout() {
    this.service.logout();
    this.router.navigate(['/accounts']);
  }

  // routeToOauth(){
  //   this.auth.loginWithRedirect();
  // }


}

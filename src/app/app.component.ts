import { Component } from '@angular/core';
import { GeneralserviceService } from './services/generalservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angularproject';

  constructor(private service: GeneralserviceService) { }

  value = '';
  displayMessages: any;

  navigateToLogin() {

  }

  navigateToRegister() {

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

}

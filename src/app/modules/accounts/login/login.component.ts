import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GeneralserviceService } from 'src/app/services/generalservice.service';

// Import the AuthService type from the SDK
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  template: '<button (click)="login">Login</button>',

  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  loginForm: FormGroup;
  loading = false;
  submitted = false;
  isLoginSucessFull: boolean = false;
  errorMsg: boolean = false;
  displayMessage: string | undefined;
  errorAlert: boolean | undefined;
  
 

  constructor(
    public auth: AuthService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private serviceService: GeneralserviceService
  ) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

   

  }


  ngOnInit(): void {


  }

  login(): void {
    // Call this to redirect the user to the login page
    this.auth.loginWithRedirect();
  }
  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    const value = this.loginForm.getRawValue();
    //console.log(value)
    const reqObj = {
      userName: value.username,
      password: value.password
    }

    this.serviceService.getUser(reqObj).subscribe(data => {
      if (data) {
        this.isLoginSucessFull = true;
        this.router.navigate(["/home-dashboard"])
      } else {
        this.errorAlert = true;
        this.displayMessage = 'Username or password is incorrect'
        this.errorMsg = true;
        this.isLoginSucessFull = false;
      }
    },
      (err) => {
        this.isLoginSucessFull = false;
      }
    )

  }

}
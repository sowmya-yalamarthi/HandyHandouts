import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GeneralserviceService } from 'src/app/services/generalservice.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;
  loading = false;
  submitted = false;
  isRegiSuccesfull : boolean = false;
  isEmailAlredayInUse : boolean = false;
  displayMessage : string = '';
  errorAlert : boolean | undefined;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private serviceService: GeneralserviceService
  ) {
    this.form = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  get f() { return this.form.controls; }

  ngOnInit(): void {
    const reqObj = {}
    
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.form.invalid) {
      return;
    }
    const value = this.form.getRawValue();
  
    const reqObj = {
      name : value.firstName,
      userName: value.username,
      password: value.password,
    }
    this.serviceService.registerUser(reqObj).subscribe((data: any) => {
      let parseValue = JSON.parse(data);
      if(parseValue.message = "User registered successfully@"){
        this.errorAlert = false;
        this.isEmailAlredayInUse = true;
        this.displayMessage = "User registered successfully";
        console.log(data)
      }
    },
      (err) => {
        console.log(err)
        let parseValue = JSON.parse(err.error);
        if(parseValue.message="Email address already in use."){
          this.errorAlert = true;
          this.isEmailAlredayInUse = true;
          this.displayMessage = "Email address already Registered please use different email"
        } 
      }
    )
  }

}
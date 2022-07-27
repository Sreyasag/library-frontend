import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  signUpForm!:FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email] ),
      password: new FormControl(null, Validators.required),
      confirmPassword: new FormControl(null, [Validators.required])
    }, this.matchPassword )
  }

  onSubmit(){
    console.log(this.signUpForm);
    
  }

  matchPassword(form:AbstractControl){
    const {password, confirmPassword } = form.value
    if(password === confirmPassword){
      return null;
    }
    return {passwordMismatch:true};
  }
    

}

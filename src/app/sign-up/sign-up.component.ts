import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  signUpForm!:FormGroup;
  signUpError:any;

  constructor(private auth:AuthService, private router:Router) { }

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email] ),
      password: new FormControl(null, Validators.required),
      confirmPassword: new FormControl(null, [Validators.required])
    }, this.matchPassword )
  }

  onSubmit(){
    this.auth.signUp(this.signUpForm.value).subscribe(
      {
        next: (data:any)=>{
          if(data.status==='success'){
            this.auth.storeUserData(data.token, data.user);
            this.router.navigate([''])
          }
        },
        error: (err)=>{
          console.log(err);      
          this.signUpError = err.message;
        } 
      }
    )
  }

  //password match validator
  matchPassword(form:AbstractControl){
    const {password, confirmPassword } = form.value
    if(password === confirmPassword){
      return null;
    }
    return {passwordMismatch:true};
  }
    

}

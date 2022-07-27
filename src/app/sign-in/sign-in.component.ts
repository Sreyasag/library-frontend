import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  
  @ViewChild('logInForm') logInForm!: NgForm;

  constructor(private auth:AuthService, private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.auth.login(this.logInForm.value).subscribe((data:any)=>{
      if(data.status==='success'){
        this.auth.storeUserData(data.token, data.user);
        this.router.navigate([''])
      }

      /////handle error for this one here
    })
  }

}

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
  loginError:any;

  constructor(private auth:AuthService, private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.auth.login(this.logInForm.value).subscribe(
      {
        next: (data:any)=>{
          if(data.status==='success'){
            this.auth.storeUserData(data.token, data.user);
            this.router.navigate([''])
          }
        },
        error: (err)=>{
          console.log(err);      
          this.loginError = err.message;
        } 
      }
    )

  }

}




// temp
//////////////////////
// .subscribe((data:any)=>{
//   if(data.status==='success'){
//     this.auth.storeUserData(data.token, data.user);
//     this.router.navigate([''])
//   }
// },
// (err)=>{
//   console.log(err);      
//   this.loginError = err.message;
// }
// )
//
///////////////////////
//
// .pipe(
//   map((data:any)=>{
//     if(data.status==='success'){
//       this.auth.storeUserData(data.token, data.user);
//       this.router.navigate([''])
//     }
//   }),
//   catchError((err)=>{
//     console.log(err);
    
//     this.loginError = err.message;
//     return of({err})
//   })
// )
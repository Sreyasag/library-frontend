import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  addBookForm!:FormGroup;
  addBookError:any;

  constructor(private http:HttpService,private auth: AuthService,private router:Router) { }

  ngOnInit(): void {
    this.addBookForm = new FormGroup({
      title: new FormControl(null, Validators.required),
      author: new FormControl(null, Validators.required ),
      category: new FormControl(null, Validators.required),
      year: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
      pages: new FormControl(null, Validators.required),
      image: new FormControl(null, Validators.required),
      
    })
  }

  onSubmit(){
    this.addBookForm.value.addedBy = this.auth.currentUser._id;
    
    this.http.post('books', this.addBookForm.value).subscribe({
      next:(data) => {       
        this.router.navigate(['']);
      },
      error:(err)=>{
        console.log(err);      
        this.addBookError = err;
        alert("Something went wrong.Couldn't add book.")
      } 
    })
  }

}

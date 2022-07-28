import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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
      title: new FormControl(null),
      author: new FormControl(null),
      category: new FormControl(null),
      year: new FormControl(null),
      description: new FormControl(null),
      pages: new FormControl(null),
      image: new FormControl(null),
      addedBy: new FormControl(null),
    })
  }

  onSubmit(){
    this.addBookForm.value.addedBy = this.auth.currentUser._id;
    console.log(this.addBookForm);////////////////remove
    
    this.http.post('books', this.addBookForm.value).subscribe({
      next:(data) => {
        console.log(data);/////////////////remove
        
        this.router.navigate(['']);
      },
      error:(err)=>{
        console.log(err);      
        this.addBookError = err.message;
      } 
    })
  }
  

}

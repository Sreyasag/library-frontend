import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {

  editBookForm:any;
  editBookError:any;
  errorOnGetData:any;
  bookId:any;
  book:any;

  constructor(private http:HttpService,private activatedRoute:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {

    this.bookId = this.activatedRoute.snapshot.paramMap.get('id')
    this.http.get(`books/${this.bookId}`).subscribe({
      next:(response:any)=>{
        this.book = response.data;
        this.editBookForm = new FormGroup({
          title: new FormControl(this.book.title , Validators.required),
          author: new FormControl(this.book.author , Validators.required ),
          category: new FormControl(this.book.category , Validators.required),
          year: new FormControl(this.book.year , Validators.required),
          description: new FormControl(this.book.description , Validators.required),
          pages: new FormControl(this.book.pages , Validators.required),
          image: new FormControl(this.book.image , Validators.required),
        })
    },
      error:(error)=>{
        this.errorOnGetData = error
      }
    })

  }

  onSubmit(){
    
    this.http.patch(`books/${this.bookId}`, this.editBookForm.value).subscribe({
      next:(data) => {       
        this.router.navigate([`/books/${this.bookId}`]);
      },
      error:(err)=>{
        console.log(err);      
        this.editBookError = err.message;
      } 
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  bookData:any;
  err:any;
  bookId:any;
  errorOnDelete:any;

  constructor(private http:HttpService, private activatedRoute:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.bookId = this.activatedRoute.snapshot.paramMap.get('id')
    this.http.get(`books/${this.bookId}`).subscribe({
      next:(response:any)=>{
        this.bookData = response.data;
      },
      error:(error)=>{
        this.err = error
      }
    })
  }

  deleteBook(){
    this.http.delete(`books/${this.bookId}`).subscribe({
      next:(response:any)=>{
        this.router.navigate([''])
      },
      error:(error)=>{
        this.errorOnDelete = error
      }
    })
  }

}

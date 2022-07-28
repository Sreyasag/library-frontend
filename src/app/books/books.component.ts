import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  booksData: any;
  constructor(private http: HttpService) { }

  ngOnInit(): void {
    this.http.get('books').subscribe(
      {
        next:(response:any)=>{
          // console.log(response);
          this.booksData= response.data;
        },
        error:(err)=>{
          console.log(err.message)
        }
      }
    )
  }

}

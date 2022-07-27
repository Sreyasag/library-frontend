import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  booksData: any;
  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.booksData = this.data.books
  }

}

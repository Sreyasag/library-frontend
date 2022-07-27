import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  books = [
    {
      title: 'gsfd',
      author:'gdfg',
      details:'dsfg'

    },
    {
      title: 'gsfgdfgfgfsgsfdgd',
      author:'gdfg',
      details:'dsfg'

    },
    {
      title: 'gsfxgvdfsdagdfj',
      author:'gdfg',
      details:'dsfg'

    },
    {
      title: 'gsgsfgsgsdfgsdfd',
      author:'gdfg',
      details:'dsfg'

    },
  ] 
  constructor() { }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  root = 'http://localhost:3000/';

  constructor(private auth:AuthService, private http:HttpClient) { }

  get(url:string){
    return this.http.get(`${this.root}${url}`,{headers: this.auth.createTokenHeader()})
  }

  post(url:string,data:any){
    return this.http.post(`${this.root}${url}`, data, {headers: this.auth.createTokenHeader()})
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  root = '';

  constructor(private auth:AuthService, private http:HttpClient) { }

  get(url:string){
    return this.http.get(`${this.root}${url}`,{headers: this.auth.createTokenHeader()})
  }

  post(url:string,data:any){
    return this.http.post(`${this.root}${url}`, data, {headers: this.auth.createTokenHeader()})
  }

  patch(url:string,data:any){
    return this.http.patch(`${this.root}${url}`,data,{headers:this.auth.createTokenHeader()})
  }

  delete(url:string){
    return this.http.delete(`${this.root}${url}`,{headers:this.auth.createTokenHeader()})
  }

}

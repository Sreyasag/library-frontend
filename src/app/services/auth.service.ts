import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  token: string|undefined;
  currentUser: any;
  root = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  //Log user in
  login(loginData: { email: string; password: string }) {
    return this.http.post(`${this.root}/users/login`, loginData);
  }

  //Store token and user data in localstorage(also in authService)
  storeUserData (token:string, user:any) {
    localStorage.setItem('id_token', token);
    localStorage.setItem('currentUser', JSON.stringify(user));
    this.currentUser = user;
    this.token = token;
  }

  //log user out
  logOut(){
    this.currentUser = undefined;
    this.token = undefined;
    localStorage.clear();
  }
}

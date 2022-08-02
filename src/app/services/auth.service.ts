import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  token: any;
  currentUser: any= this.getCurrentUser();
  root = '';
  darkMode=false;

  constructor(private http: HttpClient) {}

  //Log user in
  login(loginData: { email: string; password: string }) {
    return this.http.post(`${this.root}users/login`, loginData);
  }

  //Register user
  signUp(userData:any){
    return this.http.post(`${this.root}users/signup`, userData);
  }

  //log user out
  logOut(){
    this.currentUser = undefined;
    this.token = undefined;
    localStorage.clear();
  }

  //Store token and user data in localstorage(also in authService)
  storeUserData (token:string, user:any) {
    localStorage.setItem('id_token', token);
    localStorage.setItem('currentUser', JSON.stringify(user));
    this.currentUser = user;
    this.token = token;
  }

  //Set Authorization token in header
  createTokenHeader(){
    if(!this.token) this.token = localStorage.getItem('id_token');
    let headers = new HttpHeaders({
      "Authorization":this.token
    });
    return headers;
  }

  //Check whether user is currently logged in
  isLoggedIn(){
    if(!this.token) this.token = localStorage.getItem('id_token');
    const helper = new JwtHelperService();
    return !helper.isTokenExpired(this.token);
  }

  //get current userdata from localstorage
  getCurrentUser(){
    if(!this.currentUser){
      let user= localStorage.getItem('currentUser');
      user ? this.currentUser= JSON.parse(user) : 0;
    }
    return this.currentUser
  }

}

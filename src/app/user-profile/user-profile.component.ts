import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  userData:any;
  error:any;

  constructor(private http:HttpService, private auth:AuthService) { }

  ngOnInit(): void {
    this.userData = this.auth.getCurrentUser();
  }

}

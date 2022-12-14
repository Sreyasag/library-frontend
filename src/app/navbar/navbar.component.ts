import { Component,  OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user:any;

  constructor(public auth: AuthService, private router :Router) { }

  ngOnInit(): void {
    this.user = this.auth.getCurrentUser()||{_id:1};
  }

  onLogOut(){
    this.auth.logOut();
    this.router.navigate(['signin'])
  }

}

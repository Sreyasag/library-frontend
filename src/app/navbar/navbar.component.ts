import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private auth: AuthService, private router :Router) { }

  ngOnInit(): void {
  }

  onLogOut(){
    this.auth.logOut();
    this.router.navigate(['signin'])
  }
}

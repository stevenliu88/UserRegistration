import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userDetails;
  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.getUserDetail();
  }

  getUserDetail() {
    this.userService.getUserProfile().subscribe(
      res => {
        this.userDetails = res;
     },
     err => {
        console.log(err);
     });
  }
  onLogout() {
    localStorage.removeItem('token');
    this.router.navigate(['/user/login']);
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginResponse } from '../_models/AccountModels';
import { AccountService } from '../_services/account.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private userService: UserService, public accountService: AccountService, private router: Router, private toastr: ToastrService) {
  }
  ngOnInit(): void {  }
  logout(): void {
    this.accountService.logout();
    this.router.navigateByUrl('/home');
  }
  route(){
    let userString = localStorage.getItem('user');
    if(userString){
      let user = JSON.parse(userString) as LoginResponse;
      if(user.token){
        this.router.navigateByUrl('/users');
        return;
      }
    }
    this.router.navigateByUrl('/home');
  }
}



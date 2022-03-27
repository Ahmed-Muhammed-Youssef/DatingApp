import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { AccountService } from './_services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public title = 'Dating App';

  //public users?: User[];

  constructor(private accountService: AccountService) {
  }

  ngOnInit(): void {
    this.setCurrentUser();
  }
  setCurrentUser() {
    let userString = localStorage.getItem('user');
    if (userString != null) {
      this.accountService.setCurrentUser(JSON.parse(userString));
    }
  }
}


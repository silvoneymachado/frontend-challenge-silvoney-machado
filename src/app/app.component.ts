import { Component } from '@angular/core';
import { AccountService } from 'src/app/account/services/account.service';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  constructor(private accountService: AccountService) {}

  get userName(){
    return this.accountService.userValue.username;
  }

  get isLoggedIn(){
    const user = this.accountService.userValue;
    if (user) {
        return true;
    }
    return false;
  }

  logout() {
    if(confirm("Are you sure you want to logout?")){
      this.accountService.logout();
    }
  }
}

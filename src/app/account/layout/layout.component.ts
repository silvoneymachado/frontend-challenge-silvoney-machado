import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AccountService } from '../services/account.service';

@Component({ templateUrl: "layout.component.html" })
export class LayoutComponent implements OnInit {
  constructor(private router: Router, private accountService: AccountService) {
    if (this.accountService.userValue) {
      this.router.navigate(["/"]);
    }
  }
  ngOnInit(): void {
  }
}

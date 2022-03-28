import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Observable } from 'rxjs';

import { Holiday, HolidayResponse } from './../models/holiday';
import { HolidayService } from './services/holiday.service';

@Component({
  selector: "app-holiday",
  templateUrl: "./holiday.component.html",
  styleUrls: ["./holiday.component.scss"],
})
export class HolidayComponent implements OnInit {
  year: string = "";
  countryCode: string = "";
  country: string = "";
  holidays$: Observable<HolidayResponse> | undefined;
  // holidays: Holiday[] = [];
  displayedColumns: string[] = ["date", "name", "local_name"];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private holidayService: HolidayService
  ) {}

  ngOnInit(): void {
    const state = this.route.paramMap.pipe(map(() => window.history.state));

    state.subscribe((data) => {
      this.year = data["year"];
      this.countryCode = data["countryCode"];
      this.country = data["country"];

      if (!this.year || !this.countryCode) {
        this.router.navigate(["country"]);
        return;
      }

      this.holidays$ = this.holidayService.list({
        year: this.year,
        country_code: this.countryCode,
      });
      // this.holidays$.subscribe((item) => {
      //   this.holidays = item.holidays;
      // });
    });
  }
}

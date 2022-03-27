import { HolidayResponse } from './../models/holiday';
import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { map, Observable } from "rxjs";

@Component({
  selector: "app-holiday",
  templateUrl: "./holiday.component.html",
  styleUrls: ["./holiday.component.scss"],
})
export class HolidayComponent implements OnInit {
  year: string = '';
  countryCode: string = '';
  holidays$: Observable<HolidayResponse> | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const state = this.route.paramMap
    .pipe(map(() => window.history.state));
    
    state.subscribe((data) => {
      this.year = data["year"];
      this.countryCode = data["countryCode"];
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { Observable } from 'rxjs';

import { Country, CountryResponse } from '../models/country';
import { CountryService } from './services/country.service';

@Component({
  selector: "app-country",
  templateUrl: "./country.component.html",
  styleUrls: ["./country.component.scss"],
})
export class CountryComponent implements OnInit {
  countries: Country[] = [];
  countries$: Observable<CountryResponse>;
  filterTerm!: string;

  selectedYear = new Date().getFullYear();

  title = "Select a country to show its holidays";

  constructor(
    private countryService: CountryService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.countries$ = this.countryService.list();
    this.countries$.subscribe((item) => (this.countries = item.countries));
  }

  get years() {
    return Array.from(Array(30).keys()).map((x) => x + 2014);
  }

  clearFilterTerm() {
    this.filterTerm = "";
  }

  goToCountryHolidays(country: Country) {
    this.router.navigate(["holiday"], {
      state: { year: this.selectedYear, countryCode: country.code, country: country.name },
      relativeTo: this.route,
    });
  }

  ngOnInit(): void {}
}

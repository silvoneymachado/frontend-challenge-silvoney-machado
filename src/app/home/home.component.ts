import { Country, CountryResponse } from './models/country';
import { Component, OnInit } from '@angular/core';
import { countriesMockList } from './countriesMockList';
import { CountryService } from './services/country.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  countries: Country[] = [];
  countries$: Observable<CountryResponse>;
  filterTerm!: string;
  
  title = 'Please select a country';

  constructor(private countryService: CountryService) { 
    this.countries$ = this.countryService.list();
    this.countries$.subscribe(item => this.countries = item.countries);
  }

  clearFilterTerm(){
    this.filterTerm = '';
  }
  

  ngOnInit(): void {
    
  }

}

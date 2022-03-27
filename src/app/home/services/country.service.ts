import { Holiday, HolidayRequest } from "./../models/holiday";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Country, CountryResponse } from "../models/country";
import { delay, first, Observable, tap } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class CountryService {
  private readonly API_URL = environment.apiURL;
  private readonly MOCK_API_FILE = "/assets/countriesMock.json";
  constructor(private httpClient: HttpClient) {}

  list(): Observable<CountryResponse> {
    // return this.httpClient.post<CountryResponse>(`${this.API_URL}/holidays/Countries`, {});
    return this.httpClient.get<CountryResponse>(this.MOCK_API_FILE).pipe(
      first(),
      delay(2000),
    );
  }

  holidays(holidayRequest: HolidayRequest): Observable<Holiday[]> {
    return this.httpClient.post<Holiday[]>(
      `${this.API_URL}/holidays/Holidays`,
      holidayRequest
    );
  }
}

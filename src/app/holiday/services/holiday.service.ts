import { HolidayResponse } from './../../models/holiday';
import { HolidayRequest } from "../../models/holiday";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { first, Observable, tap } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class HolidayService {

  private readonly API_URL = environment.apiURL;
  private readonly MOCK_API_FILE = "/assets/countriesMock.json";
  constructor(private httpClient: HttpClient) {}

  holidays(holidayRequest: HolidayRequest): Observable<HolidayResponse[]> {
    return this.httpClient.post<HolidayResponse[]>(
      `${this.API_URL}/holidays/Holidays`,
      holidayRequest
    );
  }
}

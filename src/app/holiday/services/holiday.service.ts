import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { HolidayRequest } from '../../models/holiday';
import { HolidayResponse } from './../../models/holiday';

@Injectable({
  providedIn: "root",
})
export class HolidayService {
  private readonly API_URL = environment.apiURL;
  private readonly MOCK_API_FILE = "/assets/holidaysMock.json";
  constructor(private httpClient: HttpClient) {}

  list(holidayRequest: HolidayRequest): Observable<HolidayResponse> {
    return this.httpClient.post<HolidayResponse>(
      `${this.API_URL}/holidays/List`,
      holidayRequest
    );
  }
}

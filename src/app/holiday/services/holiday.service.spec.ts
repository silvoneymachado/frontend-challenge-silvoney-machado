import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { HolidayService } from './holiday.service';

describe("HolidayService", () => {
  let service: HolidayService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientModule],
    });
    service = TestBed.inject(HolidayService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});

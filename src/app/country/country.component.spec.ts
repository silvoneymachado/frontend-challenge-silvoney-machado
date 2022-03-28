import { HttpClientModule } from '@angular/common/http';
import { DebugElement } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { countriesMock } from 'src/assets/countriesMock';

import { CountryComponent } from './country.component';
import { CountryService } from './services/country.service';

describe("CountryComponent", () => {
  let component: CountryComponent;
  let fixture: ComponentFixture<CountryComponent>;
  let de: DebugElement;
  const countryMock = "../../../assets/countriesMock.json";

  let service: CountryService;
  let spy: jasmine.Spy;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientModule],
      declarations: [CountryComponent],
      providers: [CountryService],
    }).compileComponents();
  });

  beforeAll(() => {
    TestBed.resetTestEnvironment();
    TestBed.initTestEnvironment(
      BrowserDynamicTestingModule,
      platformBrowserDynamicTesting()
    );
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;

    service = de.injector.get(CountryService);

    spy = spyOn(service, "list").and.returnValue(of(countriesMock));

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have an filter level of ""', () => {
    expect(component.filterTerm).toBe("");
  });

  it("should show leading message on component start", () => {
    expect(de.query(By.all()).nativeElement.innerText).toBe(
      "Loading..."
    );
  });
});

import { HttpClientModule } from "@angular/common/http";
import { ComponentFixture, TestBed, inject } from "@angular/core/testing";
import { FormBuilder } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";

import { AccountService } from "../services/account.service";
import { LoginComponent } from "./login.component";

class MockAccountService extends AccountService {
  isAuthenticated() {
    return "Mocked";
  }
}

describe("LoginComponent", () => {
  let component: LoginComponent;
  let testBedAccountService: AccountService;
  let componentService: AccountService;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientModule],
      declarations: [LoginComponent],
      providers: [FormBuilder, AccountService],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;

    // TestBed.overrideComponent(LoginComponent, {
    //   set: {
    //     providers: [{ provide: AccountService, useClass: MockAccountService }],
    //   },
    // });

    testBedAccountService = TestBed.get(AccountService);

    componentService = fixture.debugElement.injector.get(AccountService);

    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  // it("Service injected via inject(...) and TestBed.get(...) should be the same instance", inject(
  //   [AccountService],
  //   (injectService: AccountService) => {
  //     expect(injectService).toBe(testBedAccountService);
  //   }
  // ));

  // it("Service injected via component should be and instance of MockAccountService", () => {
  //   expect(componentService instanceof MockAccountService).toBeTruthy();
  // });
});

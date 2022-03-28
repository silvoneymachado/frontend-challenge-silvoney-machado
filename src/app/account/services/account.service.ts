import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject, Observable, map } from "rxjs";
import { User } from "src/app/models/user";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class AccountService {
  private userSubject: BehaviorSubject<User>;
  public user: Observable<User>;

  constructor(private router: Router, private http: HttpClient) {
    const storagedUser = localStorage.getItem("user");
    this.userSubject = new BehaviorSubject<User>(
      storagedUser ? JSON.parse(storagedUser) : null
    );
    this.user = this.userSubject.asObservable();
  }

  public get userValue(): User {
    return this.userSubject.value;
  }

  login(username: string, password: string) {
    return this.http
      .post<User>(`${environment.authApiUrl}/signin`, {
        username,
        password,
      })
      .pipe(
        map((user: any) => {
          localStorage.setItem("user", JSON.stringify(user));
          localStorage.setItem("token", user.token);
          this.userSubject.next(user);
          return user;
        })
      );
  }

  logout() {
    localStorage.removeItem("user");
    // this.userSubject.next(null);
    this.router.navigate(["login"]);
  }
}

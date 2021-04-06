import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { Injectable } from "@angular/core";

class UserInfo {
  uid;
  username;
  token;
  level;
  isAdmin;
  isAuth;
}
@Injectable({
  providedIn: "root"
})
export class AuthService {
  token: string;

  constructor(private router: Router, private http: HttpClient) {}

  signupUser(email: string, password: string) {}

  signinUser(email: string, password: string) {
    return this.http.post("http://localhost:3000/auth/login", {
      username: email,
      password: password
    });
  }

  logout() {
    //call back end and redirect
    this.token = null;
  }

  getToken() {
    //call back end and get the token
    return this.token;
  }

  isAuthenticated() {
    //return this.token != null;
    return true;
  }
}

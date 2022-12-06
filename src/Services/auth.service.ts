import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  static readonly AUTH_HEADER = 'Authorization';
  static readonly TOKEN_PREFIX = 'Bearer ';
  static readonly TOKEN_KEY = 'token';

  private jwtHelper = new JwtHelperService();

  constructor() {}

  setToken(token: string) {
    localStorage.setItem(AuthService.TOKEN_KEY, token);
  }

  getToken(): string | null {
    return localStorage.getItem(AuthService.TOKEN_KEY);
  }

  getName(): string | null {
    const token = this.getToken();
    return token ? this.jwtHelper.decodeToken(token).name : null;
  }

  getRole(): string {
    const token = this.getToken();
    return token ? this.jwtHelper.decodeToken(token).role : null;
  }

  getUserId(): string {
    const token = this.getToken();
    return token ? this.jwtHelper.decodeToken(token).nameid : null;
  }

  clearToken() {
    localStorage.removeItem(AuthService.TOKEN_KEY);
  }

  isLoggedIn() {
    return this.getToken();
  }

  hasRole(role: string): boolean {
    return (this.getRole() as string).includes(role.toUpperCase());
  }
}

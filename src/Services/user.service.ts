import { DatePipe } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RegisterUserDto } from 'src/Models/RegisterUserDto';
import { UserLoginDto } from 'src/Models/UserLoginDto';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  apiURL = 'https://localhost:7200';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  constructor(private http: HttpClient) {}

  register(userRegister: RegisterUserDto) {
    return this.http.post<RegisterUserDto>(
      this.apiURL + '/api/User/register',
      JSON.stringify(userRegister),
      this.httpOptions
    );
  }

  login(userLoginDto: UserLoginDto): Observable<any> {
    return this.http.post<UserLoginDto>(
      this.apiURL + '/api/User/login',
      JSON.stringify(userLoginDto),
      {
        headers: this.httpOptions.headers,
        observe: 'response',
      }
    );
  }
}

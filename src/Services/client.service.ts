import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, tap } from 'rxjs';
import { Client } from 'src/app/client-list/clientInterface';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  apiURL = 'https://localhost:7200';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  constructor(private http: HttpClient) {}
  ops = [];
  getClientList() {
    return this.http.get<Client>(this.apiURL + '/api/Client', this.httpOptions);
  }

  getClientById(id: string) {}

  getClientByPhoneNumber(phonenumber: string) {
    return this.ops.length
      ? of(this.ops)
      : this.http
          .get<any>(
            this.apiURL +
              '/api/Client/GetByPhoneNumber?phonenumber=' +
              phonenumber
          )
          .pipe(tap((data) => (this.ops = data)));
  }

  createClient() {}

  deleteClient(id: string) {}
}

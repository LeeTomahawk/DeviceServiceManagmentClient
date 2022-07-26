import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
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

  getClientList() {
    return this.http.get<Client>(this.apiURL + '/api/Client', this.httpOptions);
  }

  getClientById(id: string) {}

  createClient() {}

  deleteClient(id: string) {}
}

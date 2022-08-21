import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, tap } from 'rxjs';
import { Client } from 'src/app/client-list/clientInterface';
import { UpdateClientDto } from 'src/Models/ClientUpdateDto';
import { RegisterClientDto } from 'src/Models/RegisterClientDto';

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
  getClientList(params: any) {
    return this.http.get<any>(
      this.apiURL +
        '/api/Client?SearchPharse=' +
        params.SearchPharse +
        '&PageNumber=' +
        params.PageNumber +
        '&PageSize=' +
        params.PageSize +
        '&SortBy=' +
        params.SortBy +
        '&SortDirection=' +
        params.SortDirection,
      this.httpOptions
    );
  }

  getClientTaskList(id: string) {
    return this.http.get<any>(
      this.apiURL + '/api/Task/client/' + id,
      this.httpOptions
    );
  }

  getClientById(id: string) {
    return this.http.get<Client>(
      this.apiURL + '/api/Client/' + id,
      this.httpOptions
    );
  }

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

  createClient(clientDto: RegisterClientDto) {
    return this.http.post<RegisterClientDto>(
      this.apiURL + '/api/Client',
      JSON.stringify(clientDto),
      this.httpOptions
    );
  }

  deleteClient(id: string) {
    return this.http.delete(
      this.apiURL + '/api/Client/' + id,
      this.httpOptions
    );
  }

  updateClient(clientDto: UpdateClientDto, clientId: string) {
    clientDto.id = clientId;
    return this.http.put<UpdateClientDto>(
      this.apiURL + '/api/Client',
      JSON.stringify(clientDto),
      this.httpOptions
    );
  }
}

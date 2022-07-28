import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Workplace } from 'src/app/workplace-list/WorkplaceInterface';

@Injectable({
  providedIn: 'root',
})
export class WorkplaceService {
  apiURL = 'https://localhost:7200';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  constructor(private http: HttpClient) {}

  getWorkplaceList() {
    return this.http.get<Workplace>(
      this.apiURL + '/api/Workplace',
      this.httpOptions
    );
  }

  getWorkplace(id: string) {
    return this.http.get<Workplace>(
      this.apiURL + '/api/Workplace/' + id,
      this.httpOptions
    );
  }

  postWorkplace() {}

  putWorkplace() {}

  deleteWorkplace(id: string) {
    return this.http.delete(
      this.apiURL + '/api/Workplace/' + id,
      this.httpOptions
    );
  }

  postWorkplaceAddEquipment() {}

  deleteWokrplaceEquipment(id: string) {
    return this.http.delete(
      this.apiURL + '/api/Workplace/DeleteEquipment/' + id,
      this.httpOptions
    );
  }
}

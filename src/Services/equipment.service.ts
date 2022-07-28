import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Equipment } from 'src/app/equipment-list/equipmentInterface';

@Injectable({
  providedIn: 'root',
})
export class EquipmentService {
  apiURL = 'https://localhost:7200';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  constructor(private http: HttpClient) {}

  getEquipmentList() {
    return this.http.get<Equipment>(
      this.apiURL + '/api/Equipment',
      this.httpOptions
    );
  }

  getEquipment(id: string) {
    return this.http.get<Equipment>(
      this.apiURL + '/api/Equipment/' + id,
      this.httpOptions
    );
  }

  getAvailableEquipment(id: string) {
    return this.http.get<Equipment>(
      this.apiURL + '/api/Equipment/GetAvailableEquipment/' + id,
      this.httpOptions
    );
  }

  postEquipment() {}

  putEquipment() {}

  deleteEquipment(id: string) {
    return this.http.delete(
      this.apiURL + '/api/Equipment/' + id,
      this.httpOptions
    );
  }
}

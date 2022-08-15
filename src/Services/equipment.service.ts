import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Equipment } from 'src/app/equipment-list/equipmentInterface';
import { AddNewEquipmentDto } from 'src/Models/AddNewEquipmentDto';

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

  postEquipment(equipment: AddNewEquipmentDto) {
    return this.http.post<AddNewEquipmentDto>(
      this.apiURL + '/api/Equipment',
      equipment,
      this.httpOptions
    );
  }

  putEquipment() {}

  deleteEquipment(id: string) {
    return this.http.delete(
      this.apiURL + '/api/Equipment/' + id,
      this.httpOptions
    );
  }
}

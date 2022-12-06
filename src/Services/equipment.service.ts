import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Equipment } from 'src/app/equipment-list/equipmentInterface';
import { AddNewEquipmentDto } from 'src/Models/AddNewEquipmentDto';
import { UpdateEquipmentDto } from 'src/Models/UpdateEquipmentDto';

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

  getEquipmentList(params: any) {
    return this.http.get<any>(
      this.apiURL +
        '/api/Equipment?SearchPharse=' +
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

  putEquipment(equipment: UpdateEquipmentDto) {
    return this.http.put(
      this.apiURL + '/api/Equipment',
      equipment,
      this.httpOptions
    );
  }

  deleteEquipment(id: string) {
    return this.http.delete(
      this.apiURL + '/api/Equipment/' + id,
      this.httpOptions
    );
  }
}

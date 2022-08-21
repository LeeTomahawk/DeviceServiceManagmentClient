import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Workplace } from 'src/app/workplace-list/WorkplaceInterface';
import { NewWorkplaceDto } from 'src/Models/NewWorkplaceDto';

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

  postWorkplace(workplace: NewWorkplaceDto) {
    return this.http.post<any>(
      this.apiURL + '/api/Workplace/',
      workplace,
      this.httpOptions
    );
  }

  putWorkplace(workplace: NewWorkplaceDto) {
    return this.http.put<any>(
      this.apiURL + '/api/Workplace/',
      workplace,
      this.httpOptions
    );
  }

  deleteWorkplace(id: string) {
    return this.http.delete(
      this.apiURL + '/api/Workplace/' + id,
      this.httpOptions
    );
  }

  postWorkplaceAddEquipment(workplaceId: string, equipmentId: string) {
    return this.http
      .post(
        this.apiURL +
          '/api/Workplace/AddEquipment?workplaceId=' +
          workplaceId +
          '&equipmentId=' +
          equipmentId,
        this.httpOptions
      )
      .toPromise();
  }

  deleteWokrplaceEquipment(id: string) {
    return this.http.delete(
      this.apiURL + '/api/Workplace/DeleteEquipment/' + id,
      this.httpOptions
    );
  }
}

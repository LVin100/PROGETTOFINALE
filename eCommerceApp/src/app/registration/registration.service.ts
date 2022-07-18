import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class RegistrationService {
  constructor(protected http: HttpClient) {}

  registration(data: any) {
    return this.http.post('http://localhost/PROGETTOFINALE/registration', data);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(protected http: HttpClient) {}

  login(data: any) {
    return this.http.post('http://localhost/PROGETTOFINALE/user', data);
  }
}

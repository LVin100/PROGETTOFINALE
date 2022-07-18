import { Injectable } from '@angular/core';
import { Route } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn = false;
  redirectUrl: string | null = null;
  constructor() {}

  login() {
    this.isLoggedIn = true;
  }
  logout() {
    this.isLoggedIn = false;
  }
  idUser: number | null = null;
  getIdUser() {
    return this.idUser;
  }

  setIdUser(id: number) {
    this.idUser = id;
  }

  getLogStatus() {
    return this.isLoggedIn;
  }
}

import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(protected authService: AuthService, protected router: Router) {}

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}

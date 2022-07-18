import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  public text: string = 'Log In';

  constructor(protected authService: AuthService, protected router: Router) {}

  ngOnInit(): void {}

  redirect() {
    if (this.authService.isLoggedIn == true) {
      this.router.navigate(['/userDashboard']);
    }
  }
}

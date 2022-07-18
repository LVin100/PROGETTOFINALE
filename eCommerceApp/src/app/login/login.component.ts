import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  submitted = false;
  data: any;

  constructor(
    protected formBuilder: FormBuilder,
    private loginService: LoginService,
    private router: Router,
    protected authService: AuthService
  ) {}

  loginForm() {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }
  ngOnInit(): void {
    this.loginForm();
  }

  get f() {
    return this.form.controls;
  }

  submit() {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }

    this.loginService
      .login(JSON.stringify(this.form.value))
      .subscribe((res) => {
        this.data = res;
        if (this.data[0] === 200) {
          this.authService.login();
          this.router.navigate(['/userDashboard']);
          this.authService.setIdUser(this.data['id']);
        }
      });
  }
}

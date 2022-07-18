import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationService } from './registration.service';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  form!: FormGroup;
  submitted = false;
  data: any;

  constructor(
    protected formBuilder: FormBuilder,
    protected router: Router,
    protected regService: RegistrationService
  ) {}

  registrationForm() {
    this.form = this.formBuilder.group({
      first_name: ['', [Validators.required]],
      last_name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.registrationForm();
  }
  get f() {
    return this.form.controls;
  }

  submit() {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }

    this.regService
      .registration(JSON.stringify(this.form.value))
      .subscribe((res) => {
        this.data = res;
      });
  }
}

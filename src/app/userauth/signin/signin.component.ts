import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticateService } from '../authenticate.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  email = '';
  password = '';
  errorMessage = '';
  error: { name: string, message: string } = { name: '', message: '' };

  public users: Observable<any[]>;

  constructor(private formBuilder: FormBuilder, public auth: AuthenticateService, private router: Router) {

  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
    this.checkAuth();
  }

  checkAuth() {
    if (this.auth.isUserLoggedIn) {
      this.router.navigate(['/farmerpagedashboard']);
    }
  }

  clearErrorMessage() {
    this.errorMessage = '';
    this.error = { name: '', message: '' };
  }

  getUsers(path) {
    return this.auth.getUserList(path);
  }
  get f() { return this.loginForm.controls; }

  onSubmit(): void {
    this.clearErrorMessage();
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }
    this.loading = true;
    this.auth.login(this.loginForm.value.email, this.loginForm.value.password)
      .then((result) => {
        this.router.navigate(['/farmerpagedashboard']);
      }).catch((err) => {
        this.error = err;
        this.loading = false;
      });
  }
  goSignup(){
    this.router.navigate(['/sign-up']);
  }
  goHome() {
    this.router.navigate(['/']);
  }

}

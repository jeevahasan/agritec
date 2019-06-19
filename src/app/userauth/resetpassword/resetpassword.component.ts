import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from '../authenticate.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.scss']
})
export class ResetpasswordComponent implements OnInit {
  resetForm: FormGroup;
  errorMessage = '';
  error: { name: string, message: string } = { name: '', message: '' };
  submitted = false;
  constructor(private router: Router, public auth: AuthenticateService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.resetForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
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
  get f() { return this.resetForm.controls; }

  resetPassword():void {
    this.clearErrorMessage();
    this.submitted = true;

    if (this.resetForm.invalid) {
      return;
    } 
    
    if (this.auth.resetPassword(this.resetForm.value.email)){
      this.router.navigate(['/auth']);
    }
  
}
}

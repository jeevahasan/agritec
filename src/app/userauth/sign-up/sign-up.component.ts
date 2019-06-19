import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticateService } from '../authenticate.service';
import { Router   } from '@angular/router';
import { PostsService } from '../../profile/_services/posts.service';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  public email: string;
  public password: string;

  loading = false;

  constructor(private authService: AuthenticateService,
    public router: Router, private formBuilder: FormBuilder, private posts: PostsService) { }

  ngOnInit() {
      this.registerForm = this.formBuilder.group({
          email: ['', [Validators.required, Validators.email]],
          password: ['', [Validators.required, Validators.minLength(6)]]
      });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.registerForm.invalid) {
          return;
      }
      this.loading = true;
      this.authService.emailSignUp(this.registerForm.value.email, this.registerForm.value.password)
      .then((res) => {
          this.router.navigate(['/add']);

        }).catch((err) => {
        this.loading = false;
        });  
      
  }

        goAuth() {
          this.router.navigate(['/auth']);
        }
        goHome() {
          this.router.navigate(['/']);
        }
}

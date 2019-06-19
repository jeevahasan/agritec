import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticateService } from '../../userauth/authenticate.service';

@Component({
  selector: 'app-sideicons',
  templateUrl: './sideicons.component.html',
  styleUrls: ['./sideicons.component.scss']
})
export class SideiconsComponent implements OnInit {

  constructor(private router: Router, public auth: AuthenticateService) { }

  ngOnInit() {
  }
  goHome() {
    this.router.navigate(['/']);
  }
  goAuth() {
    this.router.navigate(['/auth']);
  }
  logout() {
    this.auth.logout();
  }
  goSignup(){
    this.router.navigate(['/sign-up']);
  }
}

import { Component, OnInit } from '@angular/core';
import { PostsService } from '../profile/_services/posts.service';
import { AuthenticateService } from '../userauth/authenticate.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  articles: object;
  public isLoggedIn: boolean;
  constructor(private posts: PostsService, private router: Router, public auth: AuthenticateService) { }

  ngOnInit() {
    this.posts.getPosts().subscribe(data => {
      this.posts.getUsers().subscribe(users => {
        data.map(post => {
          post.user = users.find(u => u.uid === post.data.uid);
        });
        this.articles = data;
      });
    });
    this.isLoggedIn = this.auth.isUserLoggedIn;
  }
  home() {
    this.router.navigate(['/home']);
  }

  users() {
    this.router.navigate(['/viewprofile']);
  }
  farmerpage() {
    this.router.navigate(['/farmerpagedashboard']);
  }
  bank() {
    this.router.navigate(['/bankandinsurancedash']);
  }
  agservice() {
    this.router.navigate(['/agroservicesdash']);
  }
  agshops() {
    this.router.navigate(['/agroshopsdash']);
  }
  information() {
    this.router.navigate(['/informationdash']);
  }
  discuss() {
    this.router.navigate(['/discussionforumdash']);
  }
  ads() {
    this.router.navigate(['/ads']);
  }
  feedback() {
    this.router.navigate(['/addfeedbacksandcomplaint']);
  }
  weather() {
    this.router.navigate(['/weather']);
  }
}

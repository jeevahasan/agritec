import { Component, OnInit } from '@angular/core';
import { PostsService } from '../_services/posts.service';
import { Router } from '@angular/router';
import { AuthenticateService } from '../../userauth/authenticate.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {
  searchBlogs = '';
  articles: object;
  blogs = [];
  lat: number;
  lon: number;
  public isLoggedIn: boolean;
  constructor(private posts: PostsService, private router: Router, public auth: AuthenticateService) {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.lat = position.coords.latitude;
        this.lon = position.coords.longitude;
        console.log(this.lat, this.lon);
      }, (err) => {
        console.log(err);
      });
    } else {
      alert('Geolocation is not supported by this browser.');
    }

  }

  ngOnInit() {

    this.posts.getPosts().subscribe(data => {
      this.posts.getUsers().subscribe(users => {
        data.map(post => {
          post.user = users.find(u => u.uid === post.data.uid);
        });
        this.articles = data;
        const b = Object.keys(data).map(key => ({type: key, value: this.articles[key]}));
        this.blogs = b;
        this.sortBy();


      });
    });
    this.isLoggedIn = this.auth.isUserLoggedIn;
  }
  sortBy() {
    this.blogs.sort((a: any, b: any) => {
      let aa = new Date(a['value']["data"]["date"]); 
      let bb = new Date(b['value']["data"]["date"]);
        if (aa < bb) {
            return 1;
        } else if (aa > bb) {
            return -1; 
        } else {  
            return 0;
        }  
    }); 
    this.articles = this.blogs;
}

  logout() {
    this.auth.logout();
    localStorage.clear();
  }

  goAuth() {
    this.router.navigate(['/auth']);
  }
}
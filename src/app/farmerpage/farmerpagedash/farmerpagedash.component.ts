import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from '../../userauth/authenticate.service';
import { FarmerpageService } from '../farmerpage.service';
import { Router } from '@angular/router';
import { database } from 'firebase';

@Component({
  selector: 'app-farmerpagedash',
  templateUrl: './farmerpagedash.component.html',
  styleUrls: ['./farmerpagedash.component.scss']
})
export class FarmerpagedashComponent implements OnInit {

  searchBlogs = '';
  articles: object;
  blogs = [];
  lat: number;
  lon: number;
  public isLoggedIn: boolean;
  constructor(private farmerservices: FarmerpageService, private router: Router, public auth: AuthenticateService) {

  }

  ngOnInit() {
    this.farmerservices.getPosts().subscribe(data => {
      this.farmerservices.getUsers().subscribe(users => {
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
  }
  goAddArticles() {
    this.router.navigate(['/addfarmerpage']);
  }
  goAuth() {
    this.router.navigate(['/auth']);
  }
  goSignup(){
    this.router.navigate(['/signup']);
  }
}


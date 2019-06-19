import { Component, OnInit } from '@angular/core';
import { AgroshopsService } from '../agroshops.service';
import { Router } from '@angular/router';
import { AuthenticateService } from '../../../userauth/authenticate.service';

@Component({
  selector: 'app-dash-agroshops',
  templateUrl: './dash-agroshops.component.html',
  styleUrls: ['./dash-agroshops.component.scss']
})
export class DashAgroshopsComponent implements OnInit {

  searchBlogs = '';
  articles: object;
  blogs = [];
  lat: number;
  lon: number;
  public isLoggedIn: boolean;
  constructor(private agroservices: AgroshopsService, private router: Router, public auth: AuthenticateService) {

  }

  ngOnInit() {
    this.agroservices.getPosts().subscribe(data => {
      this.agroservices.getUsers().subscribe(users => {
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
    this.router.navigate(['/addagroshops']);
  }
  goAuth() {
    this.router.navigate(['/auth']);
  }
  goSignup(){
    this.router.navigate(['/signup']);
  }
}
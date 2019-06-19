import { Component, OnInit } from '@angular/core';
import { DiscussService } from '../discuss.service';
import { AuthenticateService } from '../../userauth/authenticate.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dash-discuss',
  templateUrl: './dash-discuss.component.html',
  styleUrls: ['./dash-discuss.component.scss']
})
export class DashDiscussComponent implements OnInit {

  searchBlogs = '';
  articles: object;
  blogs = [];
  lat: number;
  lon: number;
  article: Object;
  key: String;
  public isLoggedIn: boolean;
  constructor(private route: ActivatedRoute, private agroservices: DiscussService, 
    private router: Router, public auth: AuthenticateService) {}

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
      let aa = new Date(a['value']["data"]["Likes"]); 
      let bb = new Date(b['value']["data"]["Likes"]);
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
    this.router.navigate(['/adddiscussionforum']);
  }
  goAuth() {
    this.router.navigate(['/auth']);
  }
  goSignup(){
    this.router.navigate(['/signup']);
  }
}


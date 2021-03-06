import { Component, OnInit } from '@angular/core';
import { InformationcenterService } from '../informationcenter.service';
import { Router } from '@angular/router';
import { AuthenticateService } from '../../userauth/authenticate.service';
@Component({
  selector: 'app-infordash',
  templateUrl: './infordash.component.html',
  styleUrls: ['./infordash.component.scss']
})
export class InfordashComponent implements OnInit {
  searchBlogs = '';
  articles: object;
  blogs = [];
  lat: number;
  lon: number;
  public isLoggedIn: boolean;
  constructor(private infor: InformationcenterService, private router: Router, public auth: AuthenticateService) {
  }

  ngOnInit() {
    this.infor.getPosts().subscribe(data => {
      this.infor.getUsers().subscribe(users => {
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
    this.router.navigate(['/addinfor']);
  }
  goAuth() {
    this.router.navigate(['/auth']);
  }
  goSignup(){
    this.router.navigate(['/signup']);
  }
}
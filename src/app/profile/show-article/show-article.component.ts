import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostsService } from '../_services/posts.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticateService } from '../../userauth/authenticate.service';

@Component({
  selector: 'app-show-article',
  templateUrl: './show-article.component.html',
  styleUrls: ['./show-article.component.scss']
})
export class ShowArticleComponent implements OnInit {
  public map: any = { lat: 7.7707932959502235, lon: 80.67796250851325 };

  submitted: boolean;
  key: String;
  article: Object;
  lat: number;
  lon: number;

  articles: object;
  public isLoggedIn: boolean;
  constructor(private route: ActivatedRoute, public auth: AuthenticateService,
    public posts: PostsService, private formBuilder: FormBuilder, private router: Router) {}


  ngOnInit() {

    this.key = this.route.snapshot.paramMap.get('id');
    this.posts.postData(this.key).subscribe(data => {
      this.posts.getUsers().subscribe(users => {
        data.user = users.find(u => u.uid === data.uid);
          this.article = data;
          let stringToSplit = data.location;
          let a=stringToSplit.split("@",2);
          
          this.lon=a[0];
          this.lat=a[1];
      });
    });
  }

  logout() {
    this.auth.logout();
  }
  goAuth() {
    this.router.navigate(['/auth']);
  }
  goHome() {
    this.router.navigate(['/viewprofile']);
  }

}

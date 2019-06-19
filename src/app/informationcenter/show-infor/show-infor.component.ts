import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InformationcenterService } from '../informationcenter.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticateService } from '../../userauth/authenticate.service';
import { Observable } from 'rxjs';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-show-infor',
  templateUrl: './show-infor.component.html',
  styleUrls: ['./show-infor.component.scss']
})
export class ShowInforComponent implements OnInit {
  likeForm: FormGroup;
  unlikeForm: FormGroup;
  Likes: object;
  public isLoggedIn: boolean;

  commentForm: FormGroup;
  submitted: boolean;
  key: String;
  article: Object;
  like: Object;
  constructor(private db: AngularFireDatabase,private route: ActivatedRoute, public auth: AuthenticateService,
    public infor: InformationcenterService, private formBuilder: FormBuilder, private router: Router,private http: HttpClient) {}

  ngOnInit() {
    this.likeForm = this.formBuilder.group(
      {
        'Likes': [''],
    }
    );

    this.commentForm = this.formBuilder.group(
      {
        'comments': ['', Validators.required],
      }
    );

    this.key = this.route.snapshot.paramMap.get('id');
    this.infor.postData(this.key).subscribe(data => {
      this.infor.getUsers().subscribe(users => {
        data.user = users.find(u => u.uid === data.uid);
        this.infor.getComments(this.key).subscribe(comments => {
          comments.map(comment => {
            comment.user = users.find(u => u.uid === comment.uid);
          });
          data.comments = comments;
          this.article = data;

        });
      });
    });
    
    this.key = this.route.snapshot.paramMap.get('id');
    this.infor.postData(this.key).subscribe(data => {
      this.infor.getLikes(this.key).subscribe(likes => {
        data.user = likes.find(u => u.key === this.key);

          this.like = likes;

      }); 
    });
  }

  get f() { return this.commentForm.controls; }

    onLike(){
    if (this.infor.addLikes(this.key)) {
      return;
    }
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.commentForm.invalid) {
      return;
    }
    const dt = new Date();
    var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const data = {
      'comment': this.commentForm.value.comments,
      'date': dt.getDate()+'-'+months[dt.getMonth()]+'-'+dt.getFullYear(),
      'uid': this.auth.currentUserId,
    };

    if (this.infor.addComments(data, this.key)) {
      return;
    }
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
  goHome() {
    this.router.navigate(['/']);
  }

}


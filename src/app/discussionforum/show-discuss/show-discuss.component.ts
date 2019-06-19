import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DiscussService } from '../discuss.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticateService } from '../../userauth/authenticate.service';

@Component({
  selector: 'app-show-discuss',
  templateUrl: './show-discuss.component.html',
  styleUrls: ['./show-discuss.component.scss']
})
export class ShowDiscussComponent implements OnInit {
  likeForm: FormGroup
  commentForm: FormGroup;
  submitted: boolean;
  key: String;
  article: Object;
  like: Object;
  addlike: number;
  likecount: number;
  constructor(private route: ActivatedRoute, public auth: AuthenticateService,
    public agro: DiscussService, private formBuilder: FormBuilder, private router: Router) {}

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
    this.agro.postData(this.key).subscribe(data => {
      this.agro.getUsers().subscribe(users => {
        data.user = users.find(u => u.uid === data.uid);
        this.agro.getComments(this.key).subscribe(comments => {
          comments.map(comment => {
            comment.user = users.find(u => u.uid === comment.uid);
          });
          data.comments = comments;
          this.article = data;
           this.addlike = data.Likes
        });
      });
    });
  }
  get f() { return this.commentForm.controls; }

  onLike(){
    this.likecount = this.addlike + 1;
    const data = {
      'Likes': this.likecount,
    };
    this.agro.addLikes(data, this.key);
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

    if (this.agro.addComments(data, this.key)) {
      return;
    }
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
  goHome() {
    this.router.navigate(['/']);
  }

}

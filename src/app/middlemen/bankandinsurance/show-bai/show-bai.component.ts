import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BaiService } from '../bai.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticateService } from '../../../userauth/authenticate.service';

@Component({
  selector: 'app-show-bai',
  templateUrl: './show-bai.component.html',
  styleUrls: ['./show-bai.component.scss']
})
export class ShowBaiComponent implements OnInit {

  commentForm: FormGroup;
  submitted: boolean;
  key: String;
  article: Object;
  constructor(private route: ActivatedRoute, public auth: AuthenticateService,
    public baiservices: BaiService, private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.commentForm = this.formBuilder.group(
      {
        'comments': ['', Validators.required],
      }
    );

    this.key = this.route.snapshot.paramMap.get('id');
    this.baiservices.postData(this.key).subscribe(data => {
      this.baiservices.getUsers().subscribe(users => {
        data.user = users.find(u => u.uid === data.uid);
        this.baiservices.getComments(this.key).subscribe(comments => {
          comments.map(comment => {
            comment.user = users.find(u => u.uid === comment.uid);
          });
          data.comments = comments;
          this.article = data;
        });
      });
    });
  }
  get f() { return this.commentForm.controls; }


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

    if (this.baiservices.addComments(data, this.key)) {
      return;
    }
  }

  logout() {
    this.auth.logout();
  }
  goAddArticles() {
    this.router.navigate(['/addbankandinsurance']);
  }
  goAuth() {
    this.router.navigate(['/auth']);
  }
  goHome() {
    this.router.navigate(['/']);
  }

}

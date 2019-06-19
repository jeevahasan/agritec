import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticateService } from '../../userauth/authenticate.service';
import { DiscussService } from '../discuss.service';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-discuss',
  templateUrl: './edit-discuss.component.html',
  styleUrls: ['./edit-discuss.component.scss']
})
export class EditDiscussComponent implements OnInit {

  editForm: FormGroup;
  submitted: boolean;
  loading: boolean;
  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  uploadProgress: any;
  imageURL: Observable<any>;
  fileUploaded = false;
  upldStatus = '';
  key: String;
  article: Object;
  constructor(private storage: AngularFireStorage, private formBuilder: FormBuilder, private route: ActivatedRoute,
    public auth: AuthenticateService, private router: Router, private agro: DiscussService) {
  }

  ngOnInit() {
    this.editForm = this.formBuilder.group(
      {
        'description': ['', Validators.required],
      }
    );

    this.key = this.route.snapshot.paramMap.get('id');
    this.agro.postData(this.key).subscribe(data => {
      if (data.uid === this.auth.currentUserId) {
        this.article = data;
        this.editForm.controls['description'].setValue(data.description);
      } else {
        this.router.navigate(['/discussionforumdash']);
      }

    });

    this.checkAuth();
  }
  makeId(): string {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < 5; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  }

  deletePost() {
    if (confirm('Are you sure?') && this.agro.deletePost(this.key)) {
      this.router.navigate(['/discussionforumdash']);
    }
  }

  checkAuth() {
    if (!this.auth.isUserLoggedIn) {
      this.router.navigate(['/auth']);
    }
  }
  get f() { return this.editForm.controls; }

  onSubmit(): void {
    this.submitted = true;

    if (this.editForm.invalid) {
      return;
    }

    this.loading = true;

    const dt = new Date();
    var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const data = {
      'id': this.makeId(),
      'date': dt.getDate()+'-'+months[dt.getMonth()]+'-'+dt.getFullYear(),
      'description': this.editForm.value.description,
      'uid': this.auth.currentUserId
    };

    if (this.agro.editPosts(data, this.key)) {
      this.router.navigate(['/discussionforumdash']);
    }

  }
}

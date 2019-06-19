import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DiscussService } from '../discuss.service';
import { Router } from '@angular/router';
import { AuthenticateService } from '../../userauth/authenticate.service';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-add-discuss',
  templateUrl: './add-discuss.component.html',
  styleUrls: ['./add-discuss.component.scss']
})
export class AddDiscussComponent implements OnInit {

  addForm: FormGroup;
  submitted: boolean;
  loading: boolean;
  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  uploadProgress: any;
  imageURL: Observable<any>;
  fileUploaded = false;
  upldStatus = '';
  constructor(private storage: AngularFireStorage, private formBuilder: FormBuilder,
    public auth: AuthenticateService, private router: Router, private agroservices: DiscussService) {
  }

  upload(event) {
    this.upldStatus = 'Uploading...';
    const randomId = Math.random().toString(36).substring(2);
    this.ref = this.storage.ref('/post_images/' + randomId);
    this.task = this.ref.put(event.target.files[0]);
    this.uploadProgress = this.task.percentageChanges();
    this.task.snapshotChanges().pipe(
      finalize(() => {
        this.ref.getDownloadURL().subscribe(url => {
          this.imageURL = url;
          this.upldStatus = 'Successfully uploaded';
          this.fileUploaded = true;
        });
      })
    ).subscribe();
  }

  ngOnInit() {
    this.addForm = this.formBuilder.group(
      {
        'description': ['', Validators.required],
      }
    );
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

  checkAuth() {
    if (!this.auth.isUserLoggedIn) {
      this.router.navigate(['/auth']);
    }
  }
  get f() { return this.addForm.controls; }

  onSubmit(): void {
    this.submitted = true;

    if (this.addForm.invalid) {
      return;
    }

    this.loading = true;

    const dt = new Date();
    var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const data = {
      'id': this.makeId(),
      'Likes': 0,
      'date': dt.getDate()+'-'+months[dt.getMonth()]+'-'+dt.getFullYear(),
      'description': this.addForm.value.description,
      'uid': this.auth.currentUserId
    };

    if (this.agroservices.addPosts(data)) {
      this.router.navigate(['/discussionforumdash']);
    }

  }

}
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AgroservicesService } from '../agroservices.service';
import { Router } from '@angular/router';
import { AuthenticateService } from '../../../userauth/authenticate.service';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-add-agroservices',
  templateUrl: './add-agroservices.component.html',
  styleUrls: ['./add-agroservices.component.scss']
})
export class AddAgroservicesComponent implements OnInit {

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
    public auth: AuthenticateService, private router: Router, private agroservices: AgroservicesService) {
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
        'Item_name': ['', Validators.required],
        'Offers': [''],
        'Price': ['', Validators.required],
        'Services': [''],
        'description': ['', Validators.required],
        'postimage': [''],
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
    var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const dt = new Date();
    const data = {
      'id': this.makeId(),
      'Item_name': this.addForm.value.Item_name,
      'Offers': this.addForm.value.Offers,
      'Price': this.addForm.value.Price,
      'Services': this.addForm.value.Services,
      'date': dt.getDate()+'-'+months[dt.getMonth()]+'-'+dt.getFullYear(),
      'description': this.addForm.value.description,
      'postimage': this.imageURL,
      'uid': this.auth.currentUserId
    };

    if (this.agroservices.addPosts(data)) {
      this.router.navigate(['/agroservicesdash']);
    }

  }

}


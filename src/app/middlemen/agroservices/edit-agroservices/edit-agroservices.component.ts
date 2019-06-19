import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticateService } from '../../../userauth/authenticate.service';
import { AgroservicesService } from '../agroservices.service';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-agroservices',
  templateUrl: './edit-agroservices.component.html',
  styleUrls: ['./edit-agroservices.component.scss']
})
export class EditAgroservicesComponent implements OnInit {

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
    public auth: AuthenticateService, private router: Router, private agro: AgroservicesService) {
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
    this.editForm = this.formBuilder.group(
      {
        'Item_name': ['', Validators.required],
        'Offers': [''],
        'Price': ['', Validators.required],
        'Services': [''],
        'description': ['', Validators.required],
        'postimage': [''],

      }
    );

    this.key = this.route.snapshot.paramMap.get('id');
    this.agro.postData(this.key).subscribe(data => {
      if (data.uid === this.auth.currentUserId) {
        this.article = data;
        this.editForm.controls['Item_name'].setValue(data.Item_name);
        this.editForm.controls['Offers'].setValue(data.Offers);
        this.editForm.controls['Price'].setValue(data.Price);
        this.editForm.controls['Services'].setValue(data.Services);
        this.editForm.controls['description'].setValue(data.description);
      } else {
        this.router.navigate(['/agroservicesdash']);
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
      this.router.navigate(['/agroservicesdash']);
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
      'Item_name': this.editForm.value.Item_name,
      'Offers': this.editForm.value.Offers,
      'Price': this.editForm.value.Price,
      'Services': this.editForm.value.Services,
      'description': this.editForm.value.description,
      'postimage': this.imageURL ? this.imageURL : this.article['postimage'],
      'date': dt.getDate()+'-'+months[dt.getMonth()]+'-'+dt.getFullYear(),
      'uid': this.auth.currentUserId,
      'comments': this.article['comments'],
    };

    if (this.agro.editPosts(data, this.key)) {
      this.router.navigate(['/agroservicesdash']);
    }

  }
}

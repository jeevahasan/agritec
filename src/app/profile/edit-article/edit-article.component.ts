import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticateService } from '../../userauth/authenticate.service';
import { PostsService } from '../_services/posts.service';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.scss']
})
export class EditArticleComponent implements OnInit {
  public map: any = { lat: 7.7707932959502235, lon: 80.67796250851325 };

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
  lat: number;
  lon: number;
  location: string;
  constructor(private storage: AngularFireStorage, private formBuilder: FormBuilder, private route: ActivatedRoute,
    public auth: AuthenticateService, private router: Router, private posts: PostsService) {
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
        'fullname': ['', Validators.required],
        'profileimage': [''],
        'username': ['', Validators.required],
        'dob': [''],
        'address': [''],
        'about': [''],
        phoneno: ['',Validators.required],
        location: [''],
        role: ['Farmer'],
      }
    );

    this.key = this.route.snapshot.paramMap.get('id');
    this.posts.postData(this.key).subscribe(data => {
      if (data.uid === this.auth.currentUserId) {
        this.article = data;
        this.editForm.controls['fullname'].setValue(data.fullname);
        this.editForm.controls['username'].setValue(data.username);
        this.editForm.controls['dob'].setValue(data.dob);
        this.editForm.controls['address'].setValue(data.address);
        this.editForm.controls['about'].setValue(data.about);
        this.editForm.controls['phoneno'].setValue(data.phoneno);
        this.editForm.controls['location'].setValue(data.location);
        this.editForm.controls['role'].setValue(data.role);
        let stringToSplit = data.location;
        let a=stringToSplit.split("@",2);
        
        this.lon=a[0];
        this.lat=a[1];
      } else {
        this.router.navigate(['/article/:id']);
      }

    });

    this.checkAuth();
  }

  checkAuth() {
    if (!this.auth.isUserLoggedIn) {
      this.router.navigate(['/auth']);
    }
  }
  get f() { return this.editForm.controls; }

  onChoseLocation(event)
  {
    this.lat=event.coords.lat;
    this.lon=event.coords.lng;
    this.location = this.lon+"@"+this.lat;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.editForm.invalid) {
      return;
    }

    this.loading = true;

    const dt = new Date();
    const data = {

      'fullname': this.editForm.value.fullname,
      'username': this.editForm.value.username,
      'dob': this.editForm.value.dob,
      'address': this.editForm.value.address,
      'about': this.editForm.value.about,
      'phoneno': this.editForm.value.phoneno,
      'profileimage': this.imageURL ? this.imageURL : this.article['profileimage'],
      'uid': this.auth.currentUserId,
      'location': this.location ? this.location : '',
      'role': this.editForm.value.role,

    };

    if (this.posts.editPosts(data, this.key)) {
      this.router.navigate(['/viewprofile']);
    }

  }
  logout() {
    this.auth.logout();
  }
}
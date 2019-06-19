import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticateService } from '../../userauth/authenticate.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PostsService } from '../_services/posts.service';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-add-articles',
  templateUrl: './add-articles.component.html',
  styleUrls: ['./add-articles.component.scss']
})
export class AddArticlesComponent implements OnInit {
  public map: any = { lat: 7.7707932959502235, lon: 80.67796250851325 };
  addForm: FormGroup;
  submitted: boolean;
  loading: boolean; 
  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  uploadProgress: any; 
  imageURL: Observable<any>;
  fileUploaded = false;
  upldStatus = '';

  lat: number;
  lon: number;
  location: string;
  key: String;
  article: Object;

 fname: string;
  constructor(private route: ActivatedRoute, private storage: AngularFireStorage, private formBuilder: FormBuilder,
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
    this.loading = true;
        const dt = new Date();
        var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

        let stringToSplit = this.auth.currentUserName;
        let a=stringToSplit.split("@",2);
        
        this.fname=a[0];
    const data = {
      'email': this.auth.currentUserName,
      'uid': this.auth.currentUserId,
      'fullname': this.fname,
      'username': '',
      'dob': '',
      'address': '',
      'about': '',
      'phoneno': '',
      'profileimage': 'https://firebasestorage.googleapis.com/v0/b/agritec-4e9ac.appspot.com/o/profilelogo(dont%20delete)%2Fdownload.png?alt=media&token=d18a9f63-7a0a-470e-ad45-e4d28d4843d2',
      'location':'',
      'role': '',
      'created_on': dt.getDate()+'-'+months[dt.getMonth()]+'-'+dt.getFullYear(),
    };

    if (this.posts.addPosts(data)) {
      this.router.navigate(['/add']);
    }


    this.addForm = this.formBuilder.group(
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

    this.posts.postData(this.auth.currentUserId).subscribe(data => {
      if (data.uid === this.auth.currentUserId) {
        this.article = data;
        this.addForm.controls['fullname'].setValue(data.fullname);
        this.addForm.controls['username'].setValue(data.username);
        this.addForm.controls['dob'].setValue(data.dob);
        this.addForm.controls['address'].setValue(data.address);
        this.addForm.controls['about'].setValue(data.about);
        this.addForm.controls['phoneno'].setValue(data.phoneno);
        this.addForm.controls['location'].setValue(data.location);
        this.addForm.controls['role'].setValue(data.role);
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
  onChoseLocation(event)
  {
    this.lat=event.coords.lat;
    this.lon=event.coords.lng;
    this.location = this.lon+"@"+this.lat;

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
      'fullname': this.addForm.value.fullname,
      'username': this.addForm.value.username,
      'dob': this.addForm.value.dob,
      'address': this.addForm.value.address,
      'about': this.addForm.value.about,
      'phoneno': this.addForm.value.phoneno,
      'profileimage': this.imageURL ? this.imageURL : this.article['profileimage'],
      'uid': this.auth.currentUserId,
      'location': this.location,
      'role': this.addForm.value.role,
      'email': this.auth.currentUserName
    };

    if (this.posts.editPosts(data, this.auth.currentUserId)) {
      this.router.navigate(['/viewprofile']);
    }

  }
  logout() {
    this.auth.logout();
  }


}

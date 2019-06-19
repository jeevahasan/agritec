import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FeedbackService } from '../feedback.service';
import { Router } from '@angular/router';
import { AuthenticateService } from '../../userauth/authenticate.service';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

interface ICompany {
  id: number;
  rating: number;
}

@Component({
  selector: 'app-add-feedback',
  templateUrl: './add-feedback.component.html',
  styleUrls: ['./add-feedback.component.scss']
})
export class AddFeedbackComponent implements OnInit {

  addForm: FormGroup;
  submitted: boolean;
  loading: boolean;
  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  uploadProgress: any;
  imageURL: Observable<any>;
  fileUploaded = false;
  upldStatus = '';
  public rate: number;
  constructor(private storage: AngularFireStorage, private formBuilder: FormBuilder,
    public auth: AuthenticateService, private router: Router, private feed: FeedbackService) {
  }


  ratingClicked: number;
  itemIdRatingClicked: string;
  items: ICompany[] = [
    { 'id': 0, 'rating': 3 },
  ];
 

  ngOnInit() {
    this.addForm = this.formBuilder.group(
      {
        'Complaint': [''],
        'Feedback': ['', Validators.required],
        'Rating': [''],
      }
    );
    this.checkAuth();
  }

  checkAuth() {
    if (!this.auth.isUserLoggedIn) {
      this.router.navigate(['/auth']);
    }
  }
  get f() { return this.addForm.controls; }



  ratingComponentClick(clickObj: any): void {
    const item = this.items.find(((i: any) => i.id === clickObj.itemId));
    if (!!item) {
      item.rating = clickObj.rating;
      this.ratingClicked = clickObj.rating;
      this.rate = item.rating;
    }
console.log(item.rating);
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.addForm.invalid) {
      return;
    }

    this.loading = true;
    var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const dt = new Date();
    const data = {
      'Rating': this.rate+'.0 rating(s)',
      'date': dt.getDate()+'-'+months[dt.getMonth()]+'-'+dt.getFullYear(),
      'Complaint': this.addForm.value.Complaint,
      'Feedback': this.addForm.value.Feedback,
      'Email': this.auth.currentUserName,
      'uid': this.auth.currentUserId
    };

    if (this.feed.addPosts(data)) {
      this.router.navigate(['/farmerpagedashboard']);
    }

  }

}
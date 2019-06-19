import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  private posts: AngularFireList<any[]>;
  result = [];
  constructor(private http: HttpClient, private db: AngularFireDatabase) {
    this.posts = db.list('Feedbacks and Complaints');
  }

  postData(postKey): Observable<any> {
    return this.db.object(`Feedbacks and Complaints/${postKey}`).valueChanges();
  }
  addPosts(data) {
    return this.posts.push(data);
  }
}
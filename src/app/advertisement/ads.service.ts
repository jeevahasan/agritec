import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdsService {
  private posts: AngularFireList<any[]>;
  result = [];
  constructor(private http: HttpClient, private db: AngularFireDatabase) {
    this.posts = db.list('Advertisement-details');
  }

  postData(postKey): Observable<any> {
    return this.db.object(`Advertisement-details/${postKey}`).valueChanges();
  }

  addPosts(data) {
    return this.posts.push(data);
  }
}

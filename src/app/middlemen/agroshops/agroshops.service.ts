import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AgroshopsService {
  private posts: AngularFireList<any[]>;
  result = [];
  constructor(private http: HttpClient, private db: AngularFireDatabase) {
    this.posts = db.list('AgroShops');
  }

  getPosts(): Observable<any[]> {
    return this.db.list('AgroShops')
      .snapshotChanges()
      .pipe(map(items => {
        return items.map(a => {
          const data = a.payload.val();
          const key = a.payload.key;
          return { key, data };
        });
      }));
  }

  getUsers(): Observable<any[]> {
    return this.db.list('Users').valueChanges();
  }

  getComments(key): Observable<any[]> {
    return this.db.list(`AgroShops/${key}/comments`).valueChanges();
  }

  postData(postKey): Observable<any> {
    return this.db.object(`AgroShops/${postKey}`).valueChanges();
  }

  addPosts(data) {
    return this.posts.push(data);
  }

  addComments(data, key) {
    return this.db.list(`AgroShops/${key}/comments`).push(data);
  }

  editPosts(data, key) {
    return this.db.object('AgroShops/' + key)
      .update(data);
  }

  deletePost(key) {
    return this.db.list(`AgroShops/${key}/`).remove();
  }
}

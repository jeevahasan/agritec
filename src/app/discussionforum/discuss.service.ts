import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthenticateService } from '../userauth/authenticate.service';

@Injectable({
  providedIn: 'root'
})
export class DiscussService {
  private posts: AngularFireList<any[]>;
  result = [];
  id: string = this.auth.currentUserId;

  constructor(private http: HttpClient, private db: AngularFireDatabase, public auth: AuthenticateService) {
    this.posts = db.list('DiscussionForum');
  }
  addLikes(data, key) {
    const toSend = this.db.object(`DiscussionForum/${key}`);
    return toSend.update(data);
  }

  getPosts(): Observable<any[]> {
    return this.db.list('DiscussionForum')
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
    return this.db.list(`DiscussionForum/${key}/comments`).valueChanges();
  }

  postData(postKey): Observable<any> {
    return this.db.object(`DiscussionForum/${postKey}`).valueChanges();
  }

  addPosts(data) {
    return this.posts.push(data);
  }

  addComments(data, key) {
    return this.db.list(`DiscussionForum/${key}/comments`).push(data);
  }

  editPosts(data, key) {
    return this.db.object('DiscussionForum/' + key)
      .update(data);
  }

  deletePost(key) {
    return this.db.list(`DiscussionForum/${key}/`).remove();
  }
}

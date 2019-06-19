import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthenticateService } from '../../userauth/authenticate.service';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private posts: AngularFireList<any[]>;
  result = [];
  // public userId: string= this.auth.currentUserId;
  constructor(private http: HttpClient, private db: AngularFireDatabase, public auth: AuthenticateService) {
  
    this.posts = db.list('Users');
  }

  getPosts(): Observable<any[]> {
    return this.db.list('Users')
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
    return this.db.list(`Users/${key}/comments`).valueChanges();
  }

  postData(postKey): Observable<any> {
    return this.db.object(`Users/${postKey}`).valueChanges();
  }

  // addPosts(data): Observable<any> {
  //   return this.db.object(`Users/${this.auth.currentUserId}`).valueChanges();
  // }

  addPosts(data) {
    console.log(this.auth.currentUserId);
    return this.db.object(`Users/${this.auth.currentUserId}` )
    .update(data);
  }
  // addLikes(key) {
  //   const toSend = this.db.object(`InformationcenterLikes/Likes/${key}`);
  //   return toSend.update({ [this.id]: 'true' });
  // }


  addComments(data, key) {
    return this.db.list(`Users/${key}/comments`).push(data);
  }

  editPosts(data, key) {
    return this.db.object('Users/' + key)
      .update(data);
  }

  deletePost(key) {
    return this.db.list(`Users/${key}/`).remove();
  }
}

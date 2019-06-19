import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthenticateService } from '../userauth/authenticate.service';

@Injectable({
  providedIn: 'root'
})
export class InformationcenterService {
  private posts: AngularFireList<any[]>;
  private likes: AngularFireList<any[]>;
  result = [];

  id: string = this.auth.currentUserId;
  constructor(private http: HttpClient, private db: AngularFireDatabase, public auth: AuthenticateService) {
    this.posts = db.list('Informationcenter');
  }

  getPosts(): Observable<any[]> {
    return this.db.list('Informationcenter')
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
    return this.db.list(`Informationcenter/${key}/comments`).valueChanges();
  }

  postData(postKey): Observable<any> {
    return this.db.object(`Informationcenter/${postKey}`).valueChanges();
  }

  addPosts(data) {
    return this.posts.push(data);
  }


  //For likes
  addLikes(key) {
    const toSend = this.db.object(`InformationcenterLikes/Likes/${key}`);
    return toSend.update({ [this.id]: 'true' });
  }
  getLikes(key): Observable<any[]> {
    return this.db.list(`InformationcenterLikes/Likes/${key}`).valueChanges();
  }



  addComments(data, key) {
    return this.db.list(`Informationcenter/${key}/comments`).push(data);
  }

  editPosts(data, key) {
    return this.db.object('Informationcenter/' + key)
      .update(data);
  }

  deletePost(key) {
    return this.db.list(`Informationcenter/${key}/`).remove();
  }
}

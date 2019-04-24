import { Injectable } from '@angular/core';
import { Post } from './post';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(
    private http: HttpClient
  ) { }

  path: string = "https://jsonplaceholder.typicode.com/"

  getPosts(userid): Observable<Post[]> {
    if (userid) {
      let newPath = this.path + "posts?userId=" + userid;
      return this.http.get<Post[]>(newPath);
    }
    else {
      return this.http.get<Post[]>(this.path + "posts");
    }
  }


  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.path + "users");
  }

}

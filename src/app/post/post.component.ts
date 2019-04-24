import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertifyService } from '../services/alertify.service';
import { PostService } from './post.service';
import { Post } from './post';
import { User } from './user';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  providers: [PostService]
})
export class PostComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private alertifyService: AlertifyService,
    private postService: PostService) { }

  posts: Post[];
  users: User[];
  filterText: string;
  today = new Date(Date.now());

  ngOnInit() {
    this.getUsers();
    this.activatedRoute.params.subscribe(params => {
      this.getPosts(params["userid"]);
    })
  }
  getPosts(userid) {
    this.postService.getPosts(userid).subscribe(data => {
      this.posts = data
    });
  }
  getUsers() {
    this.postService.getUsers().subscribe(data => {
      this.users = data
    });
  }

  addToFavorites(post) {
    this.alertifyService.success("Favorilere Eklendi! : " + post.title)
  }

}

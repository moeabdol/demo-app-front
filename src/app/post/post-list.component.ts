import { Component, OnInit } from "@angular/core";

import { IPost } from "./post";
import { PostService } from "./post.service";

@Component({
  moduleId: module.id,
  selector: "post-list",
  templateUrl: "post-list.component.html"
})
export class PostListComponent implements OnInit {
  posts: IPost[];
  errorMessage: string;

  constructor(
    private _postService: PostService
  ) { }

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    this._postService.getPosts()
      .subscribe(
        posts => this.posts = posts,
        error => this.errorMessage = <any>error
      );
  }
}

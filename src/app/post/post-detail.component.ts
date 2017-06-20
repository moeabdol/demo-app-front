import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

import { IPost } from "./post";
import { PostService } from "./post.service";

@Component({
  moduleId: module.id,
  selector: "post-detail",
  templateUrl: "post-detail.component.html"
})
export class PostDetailComponent implements OnInit {
  post: IPost;
  errorMessage: string;

  constructor(
    private _postService: PostService,
    private _router: Router,
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
    const id = +this._route.snapshot.params["id"];
    this.getPost(id);
  }

  getPost(id: number) {
    this._postService.getPost(id)
      .subscribe(
        post => this.post = post,
        error => this.errorMessage = <any>error
      );
  }
}

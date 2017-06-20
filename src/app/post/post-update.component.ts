import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

import { IPost } from "./post";
import { PostService } from "./post.service";

@Component({
  moduleId: module.id,
  templateUrl: "post-update.component.html"
})
export class PostUpdateComponent implements OnInit {
  post: IPost;
  errorMessage: string;

  constructor(
    private _postService: PostService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    const id = +this._route.snapshot.params["id"];
    this.getPost(id)
  }

  getPost(id: number) {
    this._postService.getPost(id)
      .subscribe(
        post => this.post = post,
        error => this.errorMessage = <any>error
      );
  }

  onSubmit(title: string, body: string) {
    this._postService.updatePost(this.post.id, {title: title, body: body})
      .subscribe(
        data => console.log(data),
        error => this.errorMessage = <any>error,
        () => this._router.navigate(["posts"])
      );
  }
}

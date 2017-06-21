import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

import { IPost } from "./post";
import { PostService } from "./post.service";

@Component({
  moduleId: module.id,
  templateUrl: "post-update.component.html"
})
export class PostUpdateComponent implements OnInit {
  post: IPost;
  editPostForm: FormGroup;
  errorMessage: string;

  constructor(
    private _postService: PostService,
    private _route: ActivatedRoute,
    private _router: Router,
    private _formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    const id = +this._route.snapshot.params["id"];
    this.getPost(id)
  }

  getPost(id: number) {
    this._postService.getPost(id)
      .subscribe(
        post => this.post = post,
        error => this.errorMessage = <any>error,
        () => this.initializeForm()
      );
  }

  initializeForm() {
    this.editPostForm = this._formBuilder.group({
      "title": [this.post.title, Validators.required],
      "body": [this.post.body, Validators.required]
    });
  }

  onSubmit() {
    if (this.editPostForm.valid) {
      const title = this.editPostForm.get("title").value;
      const body = this.editPostForm.get("body").value;
      this._postService.updatePost(this.post.id, {title: title, body: body})
        .subscribe(
          data => console.log(data),
          error => this.errorMessage = <any>error,
          () => this._router.navigate(["posts"])
        );
    }
  }

  onCancel() {
    this._router.navigate(["posts"]);
  }
}

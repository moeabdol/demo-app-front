import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

import { PostService } from "./post.service";

@Component({
  moduleId: module.id,
  templateUrl: "post-create.component.html",
})
export class PostCreateComponent implements OnInit {
  newPostForm: FormGroup;
  errorMessage: string;

  constructor(
    private _postService: PostService,
    private _router: Router,
    private _formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.newPostForm = this._formBuilder.group({
      "title": ["", Validators.required],
      "body": ["", Validators.required]
    });
  }

  onSubmit() {
    if (this.newPostForm.valid) {
      const title = this.newPostForm.get("title").value;
      const body = this.newPostForm.get("body").value;
      this._postService.postPost({title: title, body: body})
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

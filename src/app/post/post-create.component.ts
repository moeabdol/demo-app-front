import { Component } from "@angular/core";

import { PostService } from "./post.service";

@Component({
  moduleId: module.id,
  templateUrl: "post-create.component.html"
})
export class PostCreateComponent {
  errorMessage: string;

  constructor(private _postService: PostService) { }

  onSubmit(title: string, body: string) {
    this._postService.postPost({title: title, body: body})
      .subscribe(
        data => console.log(data),
        error => this.errorMessage = <any>error
      );
  }
}

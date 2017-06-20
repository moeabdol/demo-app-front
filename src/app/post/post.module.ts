import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpModule } from "@angular/http";

import { PostListComponent } from "./post-list.component";
import { PostService } from "./post.service";
import { PostRoutingModule } from "./post-routing.module";

@NgModule({
  declarations: [
    PostListComponent
  ],
  imports: [
    CommonModule,
    PostRoutingModule
  ],
  exports: [],
  providers: [PostService]
})
export class PostModule { }

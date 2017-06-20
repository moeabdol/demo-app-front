import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpModule } from "@angular/http";

import { PostService } from "./post.service";
import { PostRoutingModule } from "./post-routing.module";
import { PostListComponent } from "./post-list.component";
import { PostDetailComponent } from "./post-detail.component";

@NgModule({
  declarations: [
    PostListComponent,
    PostDetailComponent
  ],
  imports: [
    CommonModule,
    PostRoutingModule
  ],
  exports: [],
  providers: [PostService]
})
export class PostModule { }

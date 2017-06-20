import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpModule } from "@angular/http";
import { MomentModule } from "angular2-moment";

import { PostService } from "./post.service";
import { PostRoutingModule } from "./post-routing.module";
import { PostListComponent } from "./post-list.component";
import { PostDetailComponent } from "./post-detail.component";
import { PostCreateComponent } from "./post-create.component";

@NgModule({
  declarations: [
    PostListComponent,
    PostDetailComponent,
    PostCreateComponent
  ],
  imports: [
    CommonModule,
    MomentModule,
    PostRoutingModule
  ],
  exports: [],
  providers: [PostService]
})
export class PostModule { }

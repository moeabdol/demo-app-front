import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpModule } from "@angular/http";
import { MomentModule } from "angular2-moment";
import { ReactiveFormsModule } from "@angular/forms";

import { PostService } from "./post.service";
import { PostRoutingModule } from "./post-routing.module";
import { PostListComponent } from "./post-list.component";
import { PostDetailComponent } from "./post-detail.component";
import { PostCreateComponent } from "./post-create.component";
import { PostUpdateComponent } from "./post-update.component";

@NgModule({
  declarations: [
    PostListComponent,
    PostDetailComponent,
    PostCreateComponent,
    PostUpdateComponent
  ],
  imports: [
    CommonModule,
    MomentModule,
    ReactiveFormsModule,
    PostRoutingModule
  ],
  exports: [],
  providers: [PostService]
})
export class PostModule { }

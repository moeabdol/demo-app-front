import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { PostListComponent } from "./post-list.component";
import { PostDetailComponent } from "./post-detail.component";
import { PostCreateComponent } from "./post-create.component";
import { PostUpdateComponent } from "./post-update.component";

const Routes = RouterModule.forChild([
  { path: "posts", component: PostListComponent },
  { path: "posts/new", component: PostCreateComponent },
  { path: "posts/:id/edit", component: PostUpdateComponent },
  { path: "posts/:id", component: PostDetailComponent }
]);

@NgModule({
  imports: [Routes],
  exports: [RouterModule]
})
export class PostRoutingModule { }

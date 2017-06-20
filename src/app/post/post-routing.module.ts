import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { PostListComponent } from "./post-list.component";

const Routes = RouterModule.forChild([
  { path: "posts", component: PostListComponent }
]);

@NgModule({
  imports: [Routes],
  exports: [RouterModule]
})
export class PostRoutingModule { }

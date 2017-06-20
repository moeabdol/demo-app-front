import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HttpModule } from "@angular/http";

import { AppComponent } from "./app.component";
import { PostModule } from "./post/post.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    PostModule,
    HttpModule,
    RouterModule.forRoot([
      { path: "", redirectTo: "posts", pathMatch: "full" }
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";

import { IPost } from "./post";

@Injectable()
export class PostService {
  private _postsUrl = "http://localhost:3000/posts";

  constructor(private _http: Http) { }

  getPosts(): Observable<IPost[]> {
    return this._http.get(this._postsUrl)
      .map((response: Response) => response.json())
      .catch(this.handleError);
  }

  getPost(id: number): Observable<IPost> {
    return this._http.get(this._postsUrl + "/" + id)
      .map((response: Response) => response.json())
      .catch(this.handleError);
  }

  handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || "Server error!");
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_ENDPOINT } from '../../constant';
import { Post } from '../../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(
    private _http: HttpClient,
  ) { }

  getPostByIdAsync(id: string): Observable<Post> {
    return this._http.get<Post>(`${API_ENDPOINT}/posts/${id}`)
  }

  getPostsAsync(): Observable<Post[]> {
    return this._http.get<Post[]>(`${API_ENDPOINT}/posts`)
  }

  deletePostByIdAsync(id: string): Observable<Post> {
    return this._http.delete<Post>(`${API_ENDPOINT}/posts/${id}`)
  }

  updatePostAsync(post: Post): Observable<Post> {
    return this._http.put<Post>(`${API_ENDPOINT}/posts/${post.id}`, post);
  }


}

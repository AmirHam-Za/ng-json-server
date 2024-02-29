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
    private http: HttpClient, 
    ) {}

    getPostByIdAsync(id:string): Observable<Post>{
      return this.http.get<Post>(`${API_ENDPOINT}/posts/${id}`)
    }
  
    getPostsAsync():Observable<Post[]>{
      return this.http.get<Post[]>(`${API_ENDPOINT}/posts`)
      }
  
    deletePostByIdAsync(id:string):Observable<Post> {
      return this.http.delete<Post>(`${API_ENDPOINT}/posts/${id}`)
    }

}

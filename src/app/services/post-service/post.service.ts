import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { API_ENDPOINT } from '../../constant';
import { Post, User } from '../../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(
    private http: HttpClient, 
    private route: ActivatedRoute
    ) {}

  getPostById(id:string): Observable<Post>{
    return this.http.get<Post>(`${API_ENDPOINT}/posts/${id}`)
  }
}

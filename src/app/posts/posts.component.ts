import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { API_ENDPOINT } from '../constant';
import { Post } from '../interfaces/interfaces';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule
  ],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent {
  
  httpClient = inject(HttpClient)
  posts: Post[] = []
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.loadPosts()

  }
  loadPosts(){
  this.getPosts().subscribe((data:Post[])=>{
  this.posts = data
  console.log(data)
})
}
getPosts():Observable<Post[]>{
    return this.http.get<Post[]>(`${API_ENDPOINT}/posts`)
  }
}

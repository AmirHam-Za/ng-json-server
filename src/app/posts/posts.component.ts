import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [CommonModule,
  HttpClientModule],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent {
  
  httpClient = inject(HttpClient)
  posts: any[] = []
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.loadPosts()

  }

  loadPosts(){
  this.getPosts().subscribe((data:any)=>{
  this.posts = data
  console.log(data)
})
}
getPosts():Observable<any>{
    return this.http.get<any>('http://localhost:3000/posts')
  }
}

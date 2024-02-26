import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { API_ENDPOINT } from '../constant';
import { Post } from '../interfaces/interfaces';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    RouterLink
  ],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent {
  
  httpClient = inject(HttpClient)
  posts: Post[] = []
 
  constructor(private http: HttpClient,
    private router: Router) { }

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



  
  deletePostById(id:string){
    this.deletePostFromDb(id).subscribe((res:Post)=>{
      console.log(res)
      this.loadPosts()
    })
  }
  
  
  deletePostFromDb(id:string):Observable<Post> {
    return this.http.delete<Post>(`${API_ENDPOINT}/posts/${id}`)
  }



  editPostById(postId: string): void {
    this.router.navigate(['/posts', postId, 'edit']);
  }
}

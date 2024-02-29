import { Component, OnInit } from '@angular/core';
import { Post } from '../../../interfaces/interfaces';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { API_ENDPOINT } from '../../../constant';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PostService } from '../../../services/post-service/post.service';

@Component({
  selector: 'app-edit-post',
  standalone: true,
  imports: [CommonModule, FormsModule,HttpClientModule],
  templateUrl: './edit-post.component.html',
  styleUrl: './edit-post.component.css'
})
export class EditPostComponent implements OnInit {
  post: Post = {
    id: '',
    userId: '',
    picture: '',
    title: '',
    content: ''
  };
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient,
    private postService: PostService,

  ) { }

  ngOnInit(): void {
    const postId = String(this.route.snapshot.paramMap.get('id'))
    this.postService.getPostById(postId).subscribe((post: Post) => {
      this.post = post;
    });
    
  }
  
  onUpdate(): void {
    this.updatePost().subscribe((updatedPost: Post) => {
      this.router.navigate(['/posts']);
      }
    );
  }
 
  updatePost(): Observable<Post> {
    return this.http.put<Post>(`${API_ENDPOINT}/posts/${this.post.id}`, this.post);
  }
}

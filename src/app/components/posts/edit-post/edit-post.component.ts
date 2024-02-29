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
    private _route: ActivatedRoute,
    private _router: Router,
    private _http: HttpClient,
    private _postService: PostService,

  ) { }

  ngOnInit(): void {
    const postId = String(this._route.snapshot.paramMap.get('id'))
    this._postService.getPostByIdAsync(postId).subscribe((post: Post) => {
      this.post = post;
    });
  }
  
  updatePost(): void {
    this.updatePostAsync().subscribe(() => {
      this._router.navigate(['/posts']);
      }
    );
  }
 
  updatePostAsync(): Observable<Post> {
    return this._http.put<Post>(`${API_ENDPOINT}/posts/${this.post.id}`, this.post);
  }
}

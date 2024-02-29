import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { Post } from '../../../interfaces/interfaces';
import { PostService } from '../../../services/post-service/post.service';

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css'
})
export class PostListComponent {
  posts: Post[] = []

  constructor(
    private _postService: PostService,
    private _router: Router) { }

  ngOnInit(): void {
    this.getPosts()

  }
  getPosts() {
    this._postService.getPostsAsync().subscribe((data: Post[]) => {
      this.posts = data
      console.log(data)
    })
  }

    deletePostById(id:string){
    this._postService.deletePostByIdAsync(id).subscribe((res:Post)=>{
      console.log(res)
      this.getPosts()
    })
  }
  
  editPostById(postId: string): void {
    this._router.navigate(['/posts', postId, 'edit']);
  }
}

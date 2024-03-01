import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../../../interfaces/interfaces';
import { PostService } from '@services/post/post.service';

@Component({
  selector: 'app-post-details',
  standalone: true,
  imports: [],
  templateUrl: './post-details.component.html',
  styleUrl: './post-details.component.css'
})
export class PostDetailsComponent implements OnInit {
    post: Post =  {
    id: '',
    userId: '',
    picture: '',
    title: '',
    content:''
  }
  
  constructor(
    private route: ActivatedRoute,
    private _postService: PostService,
    ){}

    ngOnInit(): void {
      const postIdFromRoute = String(this.route.snapshot.paramMap.get('id'))
      
      this._postService.getPostByIdAsync(postIdFromRoute).subscribe((res:Post)=>{
        this.post = res
        console.log(res)
      })
    }
}

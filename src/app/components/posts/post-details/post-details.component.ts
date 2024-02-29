import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../../../interfaces/interfaces';
import { PostService } from '../../../services/post-service/post.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-post-details',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule
  ],
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
    private postService: PostService,
    ){}

    ngOnInit(): void {

      const postIdFromRoute = String(this.route.snapshot.paramMap.get('id'))
      
      this.postService.getPostById(postIdFromRoute).subscribe((res:Post)=>{
        this.post = res
        console.log(res)
      })
    }
}

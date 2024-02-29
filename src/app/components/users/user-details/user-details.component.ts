import { Component, OnInit } from '@angular/core';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../../interfaces/interfaces';
import { UserService } from '../../../services/user-service/user.service';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule
  ],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent implements OnInit {
user: User={
  id: '',
  title: '',
  isActive: false,
  picture: '',
  age: '',
  gender: '',
  company: '',
  email: '',
  phone: '',
  address: ''
}

constructor(
  private route: ActivatedRoute,
  private userService: UserService,
){}
  ngOnInit(): void {
    const userIdFromRoute = String(this.route.snapshot.paramMap.get('id'))
    
    this.userService.getUserById(userIdFromRoute).subscribe((res:User)=>{
      this.user = res
      console.log(res)
    })
  }


    // getUserById(id: string): Observable<User> {
  //   return this.http.get<User>(`${API_ENDPOINT}/users/${id}`);
  // }
}

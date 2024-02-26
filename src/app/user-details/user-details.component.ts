import { Component, OnInit } from '@angular/core';
import { API_ENDPOINT } from '../constant';
import { User } from '../interfaces/interfaces';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

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

userIdFromRoute: string | undefined
constructor(
  private http:HttpClient,
  private route: ActivatedRoute
){}
  ngOnInit(): void {
    const userIdFromRoute = String(this.route.snapshot.paramMap.get('id'))
    
    this.getUserDetailsById(userIdFromRoute).subscribe((res:User)=>{
      this.user = res
      console.log(res)
    })
  }
  getUserDetailsById(id:string): Observable<User>{
    return this.http.get<User>(`${API_ENDPOINT}/users/${id}`)
  }
}

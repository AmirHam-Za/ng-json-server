import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { API_ENDPOINT } from '../constant';
import { User } from '../interfaces/interfaces';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit {

  httpClient = inject(HttpClient)
  users: User[] = [];
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.loadUser()

  }

loadUser(){
  this.getUsers().subscribe((data:User[])=>{
  this.users = data
  console.log('users:',data)
})
}
  getUsers():Observable<User[]>{
    return this.http.get<User[]>((`${API_ENDPOINT}/users`))
    
  }
}

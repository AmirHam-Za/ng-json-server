import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { Observable } from 'rxjs';

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
  users: any[] = []
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.loadUser()

  }

loadUser(){
  this.getUsers().subscribe((data:any)=>{
  this.users = data
  console.log('users:',data)
})
}
  getUsers():Observable<any>{
    return this.http.get<any>('http://localhost:3000/users')
  }
}

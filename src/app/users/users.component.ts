import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { API_ENDPOINT } from '../constant';
import { User } from '../interfaces/interfaces';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    CommonModule, 
    HttpClientModule,
    RouterLink
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit {

  httpClient = inject(HttpClient)
  users: User[] = [];
  constructor(private http: HttpClient,
    private router: Router
    ) { }

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
    return this.http.get<User[]>(`${API_ENDPOINT}/users`)
    }

    deleteUserById(id:string){
      this.deleteUseFromDb(id).subscribe((res:User)=>{
        console.log(res)
        this.loadUser()
      })
    }
    
    
    deleteUseFromDb(id:string):Observable<User> {
      return this.http.delete<User>(`${API_ENDPOINT}/users/${id}`)
    }

    editUserById(userId: string): void {
      this.router.navigate(['/users', userId, 'edit']);
    }
}

import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { API_ENDPOINT } from '../../../constant';
import { User } from '../../../interfaces/interfaces';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [
    CommonModule, 
    HttpClientModule,
    RouterLink
  ],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {
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

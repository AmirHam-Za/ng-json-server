import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../../interfaces/interfaces';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { API_ENDPOINT } from '../../../constant';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../../services/user-service/user.service';

@Component({
  selector: 'app-edit-user',
  standalone: true,
  imports: [CommonModule, FormsModule,HttpClientModule],
  templateUrl: './edit-user.component.html',
  styleUrl: './edit-user.component.css'
})
export class EditUserComponent  implements OnInit{
  user: User = {
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
  };
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient,
    private userService: UserService,

  ) { }

  ngOnInit(): void {
    const userId = String(this.route.snapshot.paramMap.get('id'))
    this.userService.getUserById(userId).subscribe((user: User) => {
      this.user = user;
    });
  }

  // getUserById(id: string): Observable<User> {
  //   return this.http.get<User>(`${API_ENDPOINT}/users/${id}`);
  // }
  
  onUpdate(): void {
    this.updateUser().subscribe((updatedUser: User) => {
      this.router.navigate(['/users']);
      }
    );
  }
  updateUser(): Observable<User> {
    return this.http.put<User>(`${API_ENDPOINT}/users/${this.user.id}`, this.user);
  }

}

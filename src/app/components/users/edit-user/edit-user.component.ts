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
    private _route: ActivatedRoute,
    private _router: Router,
    private _http: HttpClient,
    private _userService: UserService,

  ) { }

  ngOnInit(): void {
    const userId = String(this._route.snapshot.paramMap.get('id'))
    this._userService.getUserByIdAsync(userId).subscribe((user: User) => {
      this.user = user;
    });
  }

  updateUser(): void {
    this.updateUserAsync().subscribe(() => {
      this._router.navigate(['/users']);
      }
    );
  }

  updateUserAsync(): Observable<User> {
    return this._http.put<User>(`${API_ENDPOINT}/users/${this.user.id}`, this.user);
  }

}

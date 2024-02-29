import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_ENDPOINT } from '../../constant';
import { Observable } from 'rxjs';
import { User } from '../../interfaces/interfaces';
import { ActivatedRoute } from '@angular/router';
// import { User } from '../../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient, 
    private route: ActivatedRoute
    ) {}

  getUserById(id:string): Observable<User>{
    return this.http.get<User>(`${API_ENDPOINT}/users/${id}`)
  }
}

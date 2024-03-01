import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_ENDPOINT } from '../../constant';
import { Observable } from 'rxjs';
import { User } from '../../interfaces/interfaces';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private _http: HttpClient,
  ) { }

  getUserByIdAsync(id: string): Observable<User> {
    return this._http.get<User>(`${API_ENDPOINT}/users/${id}`)
  }

  getUsersAsync(): Observable<User[]> {
    return this._http.get<User[]>(`${API_ENDPOINT}/users`)
  }

  deleteUserByIdAsync(id: string): Observable<User> {
    return this._http.delete<User>(`${API_ENDPOINT}/users/${id}`)
  }
  updateUserAsync(user: User): Observable<User> {
    return this._http.put<User>(`${API_ENDPOINT}/users/${user.id}`, user);
  }

}

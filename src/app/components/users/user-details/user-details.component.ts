import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../../interfaces/interfaces';
import { UserService } from '../../../services/user-service/user.service';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [],
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
  private _route: ActivatedRoute,
  private _userService: UserService,
){}
  ngOnInit(): void {
    const userIdFromRoute = String(this._route.snapshot.paramMap.get('id'))
    
    this._userService.getUserByIdAsync(userIdFromRoute).subscribe((res:User)=>{
      this.user = res
      console.log(res)
    })
  }

}

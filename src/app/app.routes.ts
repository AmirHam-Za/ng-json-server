import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { PostsComponent } from './posts/posts.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { EditPostComponent } from './edit-post/edit-post.component';

export const routes: Routes = [
  {
    pathMatch: 'full',
    path: '',
    component: HomeComponent
  },
  {
    path: 'users',
    component: UsersComponent
  },
  {
    path: 'posts',
    component: PostsComponent
  },
  {
    path: 'users/:id',
    component: UserDetailsComponent
  },
  { path: 'users/:id/edit', component: EditUserComponent }, 
  { path: 'posts/:id/edit', component: EditPostComponent }, 


];

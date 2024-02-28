import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PostsComponent } from './posts/posts.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { UserListComponent } from './components/users/user-list/user-list.component';

export const routes: Routes = [
  {
    pathMatch: 'full',
    path: '',
    component: HomeComponent
  },
  {
    path: 'users',
    component: UserListComponent
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

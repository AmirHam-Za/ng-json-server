import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserDetailsComponent } from './components/users/user-details/user-details.component';
import { EditUserComponent } from './components/users/edit-user/edit-user.component';
import { EditPostComponent } from './components/posts/edit-post/edit-post.component';
import { UserListComponent } from './components/users/user-list/user-list.component';
import { PostListComponent } from './components/posts/post-list/post-list.component';
import { PostDetailsComponent } from './components/posts/post-details/post-details.component';

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
    component: PostListComponent
  },
  {
    path: 'users/:id',
    component: UserDetailsComponent
  },
  {
    path: 'posts/:id',
    component: PostDetailsComponent
  },
  { path: 'users/:id/edit', component: EditUserComponent }, 
  { path: 'posts/:id/edit', component: EditPostComponent }, 


];

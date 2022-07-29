import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookComponent } from './add-book/add-book.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BooksComponent } from './books/books.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import { AuthGuard } from './services/auth.guard';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
  { path:'', component: BooksComponent, canActivate: [AuthGuard]},
  { path:'signup', component: SignUpComponent},
  { path:'signin', component: SignInComponent},
  { path:'books/add', component:AddBookComponent, canActivate:[AuthGuard]},
  { path:'books/:id', component:BookDetailsComponent, canActivate:[AuthGuard]},
  { path: 'books/:id/edit', component:EditBookComponent, canActivate:[AuthGuard]},
  { path: 'users/:id', component:UserProfileComponent, canActivate:[AuthGuard]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './components/content/content.component';
import { BooksComponent } from './components/books/books.component';
import { AuthGuard } from '@auth0/auth0-angular';


const routes: Routes = [
  { path: 'accounts', loadChildren: () => import('./modules/accounts/accounts.module').then(x => x.AccountsModule) },
  { path: '', component: ContentComponent},
  { path: 'books', component: BooksComponent, canActivate: [AuthGuard], },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }

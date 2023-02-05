import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartsComponent } from './carts/carts.component';
import { UserComponent } from './user/user.component';

export const routes: Routes = [
  {path: 'user', component: UserComponent},
  {path: 'cart', component: CartsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

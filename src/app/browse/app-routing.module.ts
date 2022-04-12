import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { NeilYoungPlaylistComponent } from './neil-young-layout/neil-young-layout.component';
import { HomeLayoutComponent } from './home-layout.component';
import { JoniPlaylistComponent } from './joni-layout/joni-layout.component';
import { AlistPopPlaylistComponent } from './alist-pop-layout/alist-pop-layout.component';
import { RBNowPlaylistComponent } from './rb-now-layout/rb-now-layout.component';
import { ListenNowComponent } from './listen-now-layout.component';
import { RadioComponent } from './radio-layout.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AuthenticationComponent } from '../auth/authentication/authentication.component';


const routes:Routes = [
  {path: '', component: HomeLayoutComponent},
  {path: 'Neil-Young', component: NeilYoungPlaylistComponent},
  {path: 'browse', component: HomeLayoutComponent},
  {path: 'Joni-Mitchell', component: JoniPlaylistComponent},
  {path: 'a-list-pop', component: AlistPopPlaylistComponent},
  {path: 'rb-now', component: RBNowPlaylistComponent},
  {path: 'listen-now', component: ListenNowComponent},
  {path: 'radio', component: RadioComponent},
  {path: 'admin', component: AddProductComponent},
  {path: 'auth', component: AuthenticationComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule, 
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }

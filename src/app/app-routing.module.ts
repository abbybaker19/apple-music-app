import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { NeilYoungPlaylistComponent } from './browse/neil-young-layout/neil-young-layout.component';
import { HomeLayoutComponent } from './browse/home-layout.component';
import { JoniPlaylistComponent } from './browse/joni-layout/joni-layout.component';
import { AlistPopPlaylistComponent } from './browse/alist-pop-layout/alist-pop-layout.component';
import { RBNowPlaylistComponent } from './browse/rb-now-layout/rb-now-layout.component';
import { ListenNowComponent } from './browse/listen-now-layout.component';
import { RadioComponent } from './browse/radio-layout.component'
import { AddProductComponent } from './browse/add-product/add-product.component';

const routes:Routes = [
  {path: '', component: HomeLayoutComponent},
  {path: 'Neil-Young', component: NeilYoungPlaylistComponent},
  {path: 'browse', component: HomeLayoutComponent},
  {path: 'Joni-Mitchell', component: JoniPlaylistComponent},
  {path: 'a-list-pop', component: AlistPopPlaylistComponent},
  {path: 'rb-now', component: RBNowPlaylistComponent},
  {path: 'listen-now', component: ListenNowComponent},
  {path: 'radio', component: RadioComponent},
  {path: 'admin', component: AddProductComponent}
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

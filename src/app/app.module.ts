import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TopNavBarComponent } from 'src/app/navigation/topnavbar/topnavbar.component';
import { FooterComponent } from './navigation/footer/footer.component';
import { SignInComponent } from './navigation/signin/signin.component';
import { CategoryCardComponent } from './browse/carousel-cards/category.card.component';
import { AppComponent } from './app.component';
import { SideNavBarComponent } from './navigation/sidenavbar/sidenavbar.component';
import { CategoryCarouselComponent } from './browse/carousel-cards/category.carousel.component';
import { VerticalCardComponent } from './browse/carousel-cards/vertical.card.component';
import { HorizontalCardComponent } from './browse/carousel-cards/horizontal.card.component';
import { AppRoutingModule } from './app-routing.module';
import { NeilYoungPlaylistComponent } from './browse/neil-young-layout/neil-young-layout.component';
import { HomeLayoutComponent } from './browse/home-layout.component';
import { JoniPlaylistComponent } from './browse/joni-layout/joni-layout.component';
import { AlistPopPlaylistComponent } from './browse/alist-pop-layout/alist-pop-layout.component';
import { RBNowPlaylistComponent } from './browse/rb-now-layout/rb-now-layout.component';
import { ListenNowComponent } from './browse/listen-now-layout.component';
import { RadioComponent } from './browse/radio-layout.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { HttpClientModule } from '@angular/common/http';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    SideNavBarComponent,
    FooterComponent,
    SignInComponent,
    CategoryCardComponent,
    CategoryCarouselComponent,
    VerticalCardComponent,
    HorizontalCardComponent,
    NeilYoungPlaylistComponent,
    HomeLayoutComponent,
    JoniPlaylistComponent,
    AlistPopPlaylistComponent,
    RBNowPlaylistComponent,
    ListenNowComponent,
    RadioComponent,
    UserInfoComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

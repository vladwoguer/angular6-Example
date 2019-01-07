import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StarComponent } from './star/star.component';
import { CapitalizePipe } from './capitalize.pipe';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CapitalizeComponent } from './capitalize/capitalize.component';
import { LikeComponent } from './like/like.component';
import { ZipComponent } from './zip/zip.component';
import { CourseComponent } from './course/course.component';
import { PasswordComponent } from './password/password.component';
import { FollowersComponent } from './followers/followers.component';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import {RouterModule, Routes} from '@angular/router';
import { ArchiveComponent } from './archive/archive.component';


const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'archive/:year/:month', component: ArchiveComponent},
  {path: 'followers', component: FollowersComponent},
  { path: '**', component: HomeComponent }
]


@NgModule({
  declarations: [
    AppComponent,
    StarComponent,
    CapitalizePipe,
    CapitalizeComponent,
    LikeComponent,
    ZipComponent,
    CourseComponent,
    PasswordComponent,
    FollowersComponent,
    HomeComponent,
    ArchiveComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

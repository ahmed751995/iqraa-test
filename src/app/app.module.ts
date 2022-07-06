import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router'
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ButtonComponent } from './components/button/button.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ImageListComponent } from './components/image-list/image-list.component';
import { ImageDetailsComponent } from './components/image-details/image-details.component';
import { HomeComponent } from './components/home/home.component';
import { ImageFormComponent } from './components/image-form/image-form.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'images', component: ImageListComponent},
  {path: 'images/new', component: ImageFormComponent},
  {path: "images/:id", component: ImageDetailsComponent},
  {path: 'login', component: LoginComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ButtonComponent,
    NavbarComponent,
    ImageListComponent,
    ImageDetailsComponent,
    HomeComponent,
    ImageFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true}),
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

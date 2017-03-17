import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { StoryComponent } from './pages/story/story.component';
import { ChapterComponent } from './pages/chapter/chapter.component';
import { UserComponent } from './pages/user/user.component';
import { StoryCardComponent } from './component/story-card/story-card.component';

import { UserFactory } from './models/user';
import { StoryFactory } from './models/story';
import { ChapterFactory } from './models/chapter';

import { SessionService } from './services/session.service';
import { RequestService } from './services/request.service';
import { AuthComponent } from './pages/auth/auth.component';
import { EditorComponent } from './component/editor/editor.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'auth', component: AuthComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StoryComponent,
    ChapterComponent,
    UserComponent,
    StoryCardComponent,
    AuthComponent,
    EditorComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [SessionService, RequestService, UserFactory, StoryFactory, ChapterFactory],
  bootstrap: [AppComponent]
})
export class AppModule { }

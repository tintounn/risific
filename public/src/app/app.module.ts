import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { StoryComponent, StoryEditor, StoryCard } from './pages/story/story.component';
import { ChapterComponent, ChapterEditor, ChapterCard } from './pages/chapter/chapter.component';
import { UserComponent } from './pages/user/user.component';

import { UserFactory } from './models/user';
import { StoryFactory } from './models/story';
import { ChapterFactory } from './models/chapter';

import { SessionService } from './services/session.service';
import { RequestService } from './services/request.service';
import { AuthComponent } from './pages/auth/auth.component';
import { EditorComponent } from './component/editor/editor.component';
import { ConfirmButtonComponent } from './component/confirm-button/confirm-button.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'auth', component: AuthComponent},
  {path: 'stories/:id', component: StoryComponent},
  {path: 'stories/:story/chapters/:id', component: ChapterComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StoryComponent, StoryEditor, StoryCard,
    ChapterComponent, ChapterEditor, ChapterCard,
    UserComponent,
    AuthComponent,
    EditorComponent,
    ConfirmButtonComponent
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

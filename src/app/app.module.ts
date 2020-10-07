import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TalksComponent } from './talks/talks.component';
import { TalkComponent } from './talk/talk.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SpeakerNamesPipe } from './speaker-names.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TalksComponent,
    TalkComponent,
    NavbarComponent,
    SpeakerNamesPipe,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

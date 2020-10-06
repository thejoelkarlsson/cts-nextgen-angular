import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TalksComponent } from './talks/talks.component';
import { TalkComponent } from './talk/talk.component';

const routes: Routes = [
  { path: 'talks', component: TalksComponent },
  { path: 'talk/:id', component: TalkComponent },
  { path: '', redirectTo: '/talks', pathMatch: 'full' },
  { path: '**', redirectTo: '/talks', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

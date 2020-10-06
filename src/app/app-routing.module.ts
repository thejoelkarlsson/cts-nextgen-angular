import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TalksComponent } from './talks/talks.component';

const routes: Routes = [
  { path: 'talks', component: TalksComponent },
  { path: '', redirectTo: '/talks', pathMatch: 'full' },
  { path: '**', redirectTo: '/talks', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

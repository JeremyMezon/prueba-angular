import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharactersComponent } from './components/characters/characters.component';
import { AboutComponent } from './components/about/about.component';
import { ResultsComponent } from './components/results/results.component';

const routes: Routes = [
  { path: 'home', component: CharactersComponent},
  { path: 'about', component: AboutComponent },
  { path: 'home/:characterName', component: ResultsComponent},
  { path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

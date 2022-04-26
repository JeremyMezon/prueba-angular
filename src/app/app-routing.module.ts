import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharactersComponent } from './pages/characters/characters.component';
import { AboutComponent } from './pages/about/about.component';
//import { ResultsComponent } from './components/results/results.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { HomeComponent } from './pages/home/home.component';
import { CharacterDetailsComponent } from './components/character-details/character-details.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent},
  { path: 'characters', component: CharactersComponent },
  { path: 'characters/:characterName', component: CharactersComponent },
  { path: 'character/:characterID', component: CharacterDetailsComponent },
  { path: 'about', component: AboutComponent },

  // { path: 'characters/:pageNumber', component: CharactersComponent},
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CharactersService } from './services/characters.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { CharactersComponent } from './components/characters/characters.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { ResultsComponent } from './components/results/results.component';
import { AboutComponent } from './components/about/about.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CharacterComponent } from './components/character/character.component';
import { PaginationCharactersComponent } from './components/pagination-characters/pagination-characters.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CharactersComponent,
    FooterComponent,
    ResultsComponent,
    AboutComponent,
    PageNotFoundComponent,
    CharacterComponent,
    PaginationCharactersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [
    CharactersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

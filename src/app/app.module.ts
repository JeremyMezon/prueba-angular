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
import { NgxPaginationModule } from 'ngx-pagination';
import { HomeComponent } from './pages/home/home.component';
import { CharacterDetailsComponent } from './components/character-details/character-details.component';
import {NgxParallaxModule}  from '@yoozly/ngx-parallax';
import { ButtonComponent } from './components/shared/button/button.component'; 

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
    HomeComponent,
    CharacterDetailsComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    NgxParallaxModule
  ],
  providers: [
    CharactersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

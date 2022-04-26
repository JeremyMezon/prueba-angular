import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CharactersService } from './services/characters.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { CharactersComponent } from './pages/characters/characters.component';
import { FooterComponent } from './shared/footer/footer.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { CharacterComponent } from './components/character/character.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { HomeComponent } from './pages/home/home.component';
import { CharacterDetailsComponent } from './components/character-details/character-details.component';
import {NgxParallaxModule}  from '@yoozly/ngx-parallax';
import { ButtonComponent } from './shared/button/button.component'; 

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CharactersComponent,
    FooterComponent,
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
    NgxParallaxModule,
  ],
  providers: [
    CharactersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

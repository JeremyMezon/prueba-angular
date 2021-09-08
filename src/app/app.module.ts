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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CharactersComponent,
    FooterComponent,
    ResultsComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    CharactersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

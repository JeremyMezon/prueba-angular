import { Component, OnInit,AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { IParallaxScrollConfig } from 'ngx-parallax-scroll';
import { CharactersService } from 'src/app/services/characters.service';
import { EpisodesService } from 'src/app/services/episodes.service';
import { LocationsService } from 'src/app/services/locations.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,AfterViewInit {

  totalCharacters: number;
  totalLocations: number;
  totalEpisodes: number;
  images : any;

  constructor(
    private episodesService:EpisodesService,
    private characterService:CharactersService,
    private locationService:LocationsService,
  ){ }

  async ngOnInit(): Promise<void> {
    this.totalCharacters = await this.characterService.getTotalItems();
    this.totalEpisodes = await this.episodesService.getTotalItems();
    this.totalLocations = await this.locationService.getTotalItems();
  }

  ngAfterViewInit(){

  }

}

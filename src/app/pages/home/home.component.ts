import { Component, OnInit,AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { IParallaxScrollConfig } from 'ngx-parallax-scroll';
import { CharactersService } from 'src/app/services/characters.service';

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
    private characterService:CharactersService
  ){ }

  async ngOnInit(): Promise<void> {
    this.totalCharacters = await this.characterService.getTotalItems('character');
    this.totalEpisodes = await this.characterService.getTotalItems('episode');
    this.totalLocations = await this.characterService.getTotalItems('location');
  }

  ngAfterViewInit(){

  }

}

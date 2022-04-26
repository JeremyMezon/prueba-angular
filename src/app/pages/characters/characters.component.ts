import { Component, OnInit,OnChanges } from '@angular/core';
import {CharactersService} from '../../services/characters.service';
import {ICharacter,IEpisode,IDataInfo} from '../../interfaces/character.interface';
import { ActivatedRoute, Router, RouterEvent } from '@angular/router';
import { IPagination } from 'src/app/interfaces/pagination.interface';
@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  characters:ICharacter;
  dataInfo: IDataInfo;
  dataPagesCharacters: IPagination;
  currentPage: number;
  characterName: string;
  constructor(
    private route:ActivatedRoute,
    private charactersService:CharactersService,
    private router:Router
  ) { }

  async ngOnInit(): Promise<void> {
    this.currentPage = 1;
    this.dataPagesCharacters = {
      itemsPerPage: 20,
      currentPage: this.currentPage,
      totalItems: await this.charactersService.getTotalItems('character')
    }
    this.characters = await this.charactersService.getCharacters('character');
    
    this.route.params.subscribe(async params =>{
      if(params['characterName']){
        this.currentPage = 1;
        this.characterName = params["characterName"];
        this.dataPagesCharacters = {
          itemsPerPage: 20,
          currentPage: this.currentPage,
          totalItems:  (await this.charactersService.getSingleInfoCharacters(this.characterName,'character')).count
        }
        this.characters = await this.charactersService.getSingleCharactersByPage(this.characterName,this.currentPage,'character');
      }
    })
  }

  async changePagination(page): Promise<void>{
    this.dataPagesCharacters.currentPage = page;
    if(this.characterName){
      this.characters = await this.charactersService.getSingleCharactersByPage(this.characterName,page,'character')
    }
    else{
      this.characters = await this.charactersService.getCharactersByPage(page,'character');
    }
  }

}

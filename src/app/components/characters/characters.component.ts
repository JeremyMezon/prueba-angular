import { Component, OnInit,OnChanges } from '@angular/core';
import {CharactersService,ICharacter,IDataInfoCharacter, IPaginationCharacter} from '../../services/characters.service';
import { ResultsComponent } from '../results/results.component';
import { ActivatedRoute, Router, RouterEvent } from '@angular/router';
@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  characters:ICharacter;
  dataInfo: IDataInfoCharacter;
  dataPagesCharacters: IPaginationCharacter;
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
      totalItems: await this.charactersService.getTotalItems()
    }
    this.characters = await this.charactersService.getCharacters();
    
    this.route.params.subscribe(async params =>{
      if(params['characterName']){
        this.currentPage = 1;
        this.characterName = params["characterName"];
        this.dataPagesCharacters = {
          itemsPerPage: 20,
          currentPage: this.currentPage,
          totalItems:  (await this.charactersService.getSingleInfoCharacters(this.characterName)).count
        }
        this.characters = await this.charactersService.getSingleCharactersByPage(this.characterName,this.currentPage);
      }
    })
  }

  async changePagination(page): Promise<void>{
    this.dataPagesCharacters.currentPage = page;
    if(this.characterName){
      this.characters = await this.charactersService.getSingleCharactersByPage(this.characterName,page)
    }
    else{
      this.characters = await this.charactersService.getCharactersByPage(page);
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { ICharacter, CharactersService, IPaginationCharacter, IDataInfoCharacter } from 'src/app/services/characters.service';
import { ActivatedRoute } from '@angular/router';
import { CharacterComponent } from '../character/character.component'

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  characters:ICharacter;
  paginationCharactersData: IPaginationCharacter;
  dataInfo: IDataInfoCharacter;

  constructor(
    private route:ActivatedRoute,
    private singleCharacter:CharactersService
  ) { }

  async ngOnInit(): Promise<void> {
    this.dataInfo = await this.singleCharacter.getInfo();
    this.route.params.subscribe( async(params) => {
      if(params['characterName']) this.characters = await this.singleCharacter.getSingleCharacters(params['characterName']);
      if(params['pageNumber']) {
        this.characters = await this.singleCharacter.getCharactersByPage(params['pageNumber']);
        this.dataInfo = await this.singleCharacter.getInfo();
        console.log(this.dataInfo);
      }
    });
  }

}

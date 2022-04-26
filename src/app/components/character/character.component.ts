import { Component, Input, OnInit } from '@angular/core';
import { ICharacter } from 'src/app/interfaces/character.interface';
import { IPagination } from 'src/app/interfaces/pagination.interface';
import { CharactersService } from '../../services/characters.service'

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css','../../pages/characters/characters.component.css']
})
export class CharacterComponent implements OnInit {

  @Input() characters:ICharacter;
  @Input() paginationDataControl:IPagination;
  // @Input() isByPage: boolean;
  pagesToShow: number;
  currentP:number;
  totalCharacters:number;
  character?:ICharacter;
  
  constructor(private characterService:CharactersService) { }

  ngOnInit(): void {
    this.character = {
      id:0,
      name:"Character",
      image:"", //
      status:"Unknown", //
      species:"Unknown",
      gender:"Unknown",
      origin:{
        name: "Unknown",
        url: ""
      },
      location:{
        name: "Unknown",
        url: ""
      },
      episode: []
    }

      this.pagesToShow = this.paginationDataControl.itemsPerPage;
      //this.currentP = this.paginationDataControl.currentPage;
      this.totalCharacters = this.paginationDataControl.totalItems;
    
    
  }

  async getCurrentCharacter(currentCharacter:number){
    this.character = await this.characterService.getSingleCharacter(currentCharacter,'character');
  }

}

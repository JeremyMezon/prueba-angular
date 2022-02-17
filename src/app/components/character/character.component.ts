import { Component, Input, OnInit } from '@angular/core';
import { CharactersService,ICharacter,IPaginationCharacter } from '../../services/characters.service'

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css','../characters/characters.component.css']
})
export class CharacterComponent implements OnInit {

  @Input() characters:ICharacter;
  @Input() paginationDataControl:IPaginationCharacter;
  constructor() { }

  ngOnInit(): void {
  }

}

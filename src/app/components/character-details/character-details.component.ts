import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharactersService, ICharacter } from 'src/app/services/characters.service';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.css']
})
export class CharacterDetailsComponent implements OnInit {

  character: ICharacter;

  constructor(
    private route:ActivatedRoute,
    private characterService:CharactersService
  ) { }

  async ngOnInit(): Promise<void> {
    let Id = this.route.snapshot.params.characterID;
    this.character = await this.characterService.getSingleCharacter(Id);

    // this.route.params.subscribe(async params=>{
    //   this.character = await this.characterService.getSingleCharacter(params['characterID'])
    //   console.log(this.character);
    // });
  }

}

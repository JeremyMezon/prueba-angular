import { Component, OnInit } from '@angular/core';
import { ICharacter, CharactersService } from 'src/app/services/characters.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  characters:ICharacter;

  constructor(private route:ActivatedRoute,private singleCharacter:CharactersService) { }

  async ngOnInit(): Promise<void> {
    this.route.params.subscribe( async(params) => {
      this.characters = await this.singleCharacter.getSingleCharacters(params['characterName'])
    }
      
      )
    
  }

}

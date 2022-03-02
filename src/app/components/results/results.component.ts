import { Component, OnInit } from '@angular/core';
import { ICharacter, CharactersService, IPaginationCharacter, IDataInfoCharacter } from 'src/app/services/characters.service';
import { ActivatedRoute,Router } from '@angular/router';
import { CharacterComponent } from '../character/character.component';
import { NgxPaginationModule } from 'ngx-pagination';

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
    private router:Router,
    private singleCharacter:CharactersService
  ) { }

  async ngOnInit(): Promise<void> {
    // this.dataInfo = await this.singleCharacter.getInfo();
    this.route.queryParams.subscribe( async(params) => {
      if(params['characterName']){
        console.log(params['characterName']);
        this.characters = await this.singleCharacter.getSingleCharacters(params['characterName']);
      }
      else{
        this.dataInfo = await this.singleCharacter.getSingleInfoCharacters(params['characterName']);
        console.log(this.characters);
        this.paginationCharactersData = {
          itemsPerPage: 20,
          currentPage: 1,
          totalItems: this.dataInfo.count
        }
      }
      
      
    });
  }

  changePagination(page):void{
    this.router.navigate(['/characters'], 
    {queryParams: {
      page
    }});
  }

}

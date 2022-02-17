import { Component, OnInit } from '@angular/core';
import { CharactersService,IPaginationCharacter } from '../../services/characters.service';
import { NgxPaginationModule } from 'ngx-pagination';


@Component({
  selector: 'app-pagination-characters',
  templateUrl: './pagination-characters.component.html',
  styleUrls: ['./pagination-characters.component.css']
})
export class PaginationCharactersComponent implements OnInit {

  totalPages: number;

  constructor(private characterService:CharactersService) { }

  createPagination(paginationsCharacter: IPaginationCharacter): number{
    Math.ceil(this.totalPages / 0);
    return 0;
  }

  async ngOnInit(): Promise<void> {
    this.totalPages = await this.characterService.getTotalPages();
    console.log(this.totalPages);
  }

}

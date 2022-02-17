import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: "root"
})
export class CharactersService {

  constructor(private http: HttpClient) { }

  async getCharacters(): Promise<ICharacter>{
    const { results } = await this.http.get<any>('https://rickandmortyapi.com/api/character').toPromise();
    return results;
  }

  async getCharactersByPage(pageNumber:number): Promise<ICharacter>{
    const { results } = await this.http.get<any>(`https://rickandmortyapi.com/api/character?page=${pageNumber}`).toPromise();
    return results;
  }

  async getTotalPages(): Promise<number>{
    const { info } = await this.http.get<any>(`https://rickandmortyapi.com/api/character`).toPromise();
    return info.pages;
  }

  async getInfo(): Promise<IDataInfoCharacter>{
    const { info } = await this.http.get<any>(`https://rickandmortyapi.com/api/character`).toPromise();
    return info;
  }

  async getSingleCharacters(nameCharacter:string): Promise<ICharacter>{
    const { results } = await this.http.get<any>(`https://rickandmortyapi.com/api/character/?name=${nameCharacter}`).toPromise();
    return results;
  }
}

export interface ICharacter {
  id:number,
  name:string,
  image:string,
  status:string,
  species:string,
  gender:string,
  origin:string,
  location:string
}

export interface IPaginationCharacter{
  id: string,
  itemsPerPage: number,
  currentPage: number,
  totalItems: number
}

export interface IDataInfoCharacter{
  count: number,
  pages: number,
  next: string,
  prev: string
}

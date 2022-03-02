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

  async getTotalItems(): Promise<number>{
    const { info } = await this.http.get<any>(`https://rickandmortyapi.com/api/character`).toPromise();
    return info.count;
  }

  async getInfo(): Promise<IDataInfoCharacter>{
    const { info } = await this.http.get<any>(`https://rickandmortyapi.com/api/character`).toPromise();
    return info;
  }

  async getInfoByPage(pageNumber:number): Promise<IDataInfoCharacter>{
    const { info } = await this.http.get<any>(`https://rickandmortyapi.com/api/character?page=${pageNumber}`).toPromise();
    return info;
  }

  async getSingleCharacters(nameCharacter:string): Promise<ICharacter>{
    const { results } = await this.http.get<any>(`https://rickandmortyapi.com/api/character/?name=${nameCharacter}`).toPromise();
    return results;
  }

  async getSingleCharacter(idCharacter:number): Promise<ICharacter>{
    const character:any = await this.http.get<any>(`https://rickandmortyapi.com/api/character/${idCharacter}`).toPromise();
    return character;
  }

  async getSingleCharactersByPage(nameCharacter:string,pageCharacter:number): Promise<ICharacter>{
    const { results } = await this.http.get<any>(`https://rickandmortyapi.com/api/character/?page=${pageCharacter}&name=${nameCharacter}`).toPromise();
    return results;
  }

  async getSingleInfoCharacters(nameCharacter:string): Promise<IDataInfoCharacter>{
    const { info } = await this.http.get<any>(`https://rickandmortyapi.com/api/character/?name=${nameCharacter}`).toPromise();
    return info;
  }
}

export interface ICharacter {
  id:number,
  name:string,
  image:string, //
  status:string, //
  species:string,
  gender:string,
  origin:{
    name: string,
    url: string
  },
  location:{
    name: string,
    url: string
  },
  episode?: []
}

export interface IPaginationCharacter{
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

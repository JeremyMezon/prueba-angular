import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ICharacter,IDataInfo} from '../interfaces/character.interface';

@Injectable({
  providedIn: "root"
})
export class CharactersService {

  constructor(
    private http: HttpClient,
  ) { }

  async getCharacters(resource: string): Promise<ICharacter>{
    const { results } = await this.http.get<any>(`https://rickandmortyapi.com/api/${resource}`).toPromise();
    return results;
  }

  async getCharactersByPage(pageNumber:number,resource: string): Promise<ICharacter>{
    const { results } = await this.http.get<any>(`https://rickandmortyapi.com/api/${resource}?page=${pageNumber}`).toPromise();
    return results;
  }

  async getTotalItems(resource: string): Promise<number>{
    const { info } = await this.http.get<any>(`https://rickandmortyapi.com/api/${resource}`).toPromise();
    return info.count;
  }

  async getInfo(resource: string): Promise<IDataInfo>{
    const { info } = await this.http.get<any>(`https://rickandmortyapi.com/api/${resource}`).toPromise();
    return info;
  }

  async getInfoByPage(pageNumber:number,resource: string): Promise<IDataInfo>{
    const { info } = await this.http.get<any>(`https://rickandmortyapi.com/api/${resource}?page=${pageNumber}`).toPromise();
    return info;
  }

  async getSingleCharacters(nameCharacter:string,resource: string): Promise<ICharacter>{
    const { results } = await this.http.get<any>(`https://rickandmortyapi.com/api/${resource}/?name=${nameCharacter}`).toPromise();
    return results;
  }

  async getSingleCharacter(idCharacter:number,resource: string): Promise<ICharacter>{
    const character:any = await this.http.get<any>(`https://rickandmortyapi.com/api/${resource}/${idCharacter}`).toPromise();
    return character;
  }

  async getSingleCharactersByPage(nameCharacter:string,pageCharacter:number,resource: string): Promise<ICharacter>{
    const { results } = await this.http.get<any>(`https://rickandmortyapi.com/api/${resource}/?page=${pageCharacter}&name=${nameCharacter}`).toPromise();
    return results;
  }

  async getSingleInfoCharacters(nameCharacter:string,resource: string): Promise<IDataInfo>{
    const { info } = await this.http.get<any>(`https://rickandmortyapi.com/api/${resource}/?name=${nameCharacter}`).toPromise();
    return info;
  }
}
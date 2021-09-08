import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: "root"
})
export class CharactersService {

  characters:{};

  constructor(private http: HttpClient) { }

  async getCharacters(): Promise<ICharacter>{
  const { results } = await this.http.get<any>('https://rickandmortyapi.com/api/character').toPromise();
  return results;
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

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EpisodesService {

  constructor(private http:HttpClient) { }

  async getEpisodes(): Promise<IEpisode>{
    const { results } = await this.http.get<any>('https://rickandmortyapi.com/api/episode').toPromise();
    return results;
  }

  async getEpisodesByPage(pageNumber:number): Promise<IEpisode>{
    const { results } = await this.http.get<any>(`https://rickandmortyapi.com/api/episode?page=${pageNumber}`).toPromise();
    return results;
  }

  async getTotalItems(): Promise<number>{
    const { info } = await this.http.get<any>(`https://rickandmortyapi.com/api/episode`).toPromise();
    return info.count;
  }

  async getInfo(): Promise<IDataInfoEpisode>{
    const { info } = await this.http.get<any>(`https://rickandmortyapi.com/api/episode`).toPromise();
    return info;
  }

  async getInfoByPage(pageNumber:number): Promise<IDataInfoEpisode>{
    const { info } = await this.http.get<any>(`https://rickandmortyapi.com/api/episode?page=${pageNumber}`).toPromise();
    return info;
  }

  async getSingleEpisodes(nameepisode:string): Promise<IEpisode>{
    const { results } = await this.http.get<any>(`https://rickandmortyapi.com/api/episode/?name=${nameepisode}`).toPromise();
    return results;
  }

  async getSingleEpisodesByPage(nameepisode:string,pageepisode:number): Promise<IEpisode>{
    const { results } = await this.http.get<any>(`https://rickandmortyapi.com/api/episode/?page=${pageepisode}&name=${nameepisode}`).toPromise();
    return results;
  }

  async getSingleInfoEpisodes(nameepisode:string): Promise<IDataInfoEpisode>{
    const { info } = await this.http.get<any>(`https://rickandmortyapi.com/api/episode/?name=${nameepisode}`).toPromise();
    return info;
  }
}

export interface IEpisode {
  id: number,
  name: string,
  air_date: string,
  episode: string,
  characters: [],
  url: string,
  created: string
}

export interface IPaginationEpisode{
  itemsPerPage: number,
  currentPage: number,
  totalItems: number
}

export interface IDataInfoEpisode{
  count: number,
  pages: number,
  next: string,
  prev: string
}



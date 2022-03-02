import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LocationsService {

  constructor(private http:HttpClient) { }

  async getLocations(): Promise<ILocation>{
    const { results } = await this.http.get<any>('https://rickandmortyapi.com/api/location').toPromise();
    return results;
  }

  async getLocationsByPage(pageNumber:number): Promise<ILocation>{
    const { results } = await this.http.get<any>(`https://rickandmortyapi.com/api/location?page=${pageNumber}`).toPromise();
    return results;
  }

  async getTotalItems(): Promise<number>{
    const { info } = await this.http.get<any>(`https://rickandmortyapi.com/api/location`).toPromise();
    return info.count;
  }

  async getInfo(): Promise<IDataInfoLocation>{
    const { info } = await this.http.get<any>(`https://rickandmortyapi.com/api/location`).toPromise();
    return info;
  }

  async getInfoByPage(pageNumber:number): Promise<IDataInfoLocation>{
    const { info } = await this.http.get<any>(`https://rickandmortyapi.com/api/location?page=${pageNumber}`).toPromise();
    return info;
  }

  async getSingleLocations(namelocation:string): Promise<ILocation>{
    const { results } = await this.http.get<any>(`https://rickandmortyapi.com/api/location/?name=${namelocation}`).toPromise();
    return results;
  }

  async getSingleLocationsByPage(namelocation:string,pagelocation:number): Promise<ILocation>{
    const { results } = await this.http.get<any>(`https://rickandmortyapi.com/api/location/?page=${pagelocation}&name=${namelocation}`).toPromise();
    return results;
  }

  async getSingleInfoLocations(namelocation:string): Promise<IDataInfoLocation>{
    const { info } = await this.http.get<any>(`https://rickandmortyapi.com/api/location/?name=${namelocation}`).toPromise();
    return info;
  }
}

export interface ILocation {
  id: number,
  name: string,
  type: string,
  dimension: string,
  residents: [],
  url: string,
  created: string
}

export interface IPaginationLocation{
  itemsPerPage: number,
  currentPage: number,
  totalItems: number
}

export interface IDataInfoLocation{
  count: number,
  pages: number,
  next: string,
  prev: string
}



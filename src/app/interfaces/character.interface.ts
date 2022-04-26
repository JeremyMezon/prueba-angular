export interface IDataInfo{
    count: number,
    pages: number,
    next: string,
    prev: string
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

export interface IEpisode {
    id: number,
    name: string,
    air_date: string,
    episode: string,
    characters: [],
    url: string,
    created: string
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
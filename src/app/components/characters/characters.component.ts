import { Component, OnInit } from '@angular/core';
import {CharactersService,ICharacter} from '../../services/characters.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  // Objeto de prueba para desestructurar
  listaAlgo = {
    palabras: [
      "Hola","Camisa","Verde"
    ],
    numeros: [5,85,40],
    otros: [
      {x:1,y:2,z:3}
    ]
  }


  characters:ICharacter;
  constructor(private charactersService:CharactersService) { }

  async ngOnInit(): Promise<void> {
    this.characters = await this.charactersService.getCharacters();
    console.log(this.characters);

    // La Desestructuracion
    const {palabras,numeros} = this.listaAlgo;
    console.log(palabras,numeros);
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  searchCharacter(characterName:string){
    let nombre:string;
    let lista:string[];
    lista.push("characterName")
    console.log(lista.toString());
  }

}

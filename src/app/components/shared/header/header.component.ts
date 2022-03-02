import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private router:Router,
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  searchCharacter(characterName:string){
    this.router.navigate(['characters',characterName]);
    // this.router.navigate(['/characters'],{
    //   queryParams: {
    //     Page: 1,
    //     Name: characterName
    //   },
    // });
  }

}

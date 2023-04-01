import { Hoard } from './../treasure-types';
import { DisplayPlayer } from './../repl-type-definitions';
import { TreasureSvcService } from './../treasure-svc.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.css']
})
export class HomeScreenComponent implements OnInit {
  
  constructor(
    // scoped parameters in constructor for dependency injection
    // import the types needed for these parameters
    private gameSvc: TreasureSvcService,
  ) {}
  
  // create properties above ngOnInit and import any types
  leaderData: DisplayPlayer[] = [];

  treasureHistory: Hoard[] = [];

  ngOnInit(): void {
    this.leaderData = this.gameSvc.leaderboard();   
  }
}

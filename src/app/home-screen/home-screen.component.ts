import { Hoard } from './../treasure-types';
import { DisplayPlayer } from './../repl-type-definitions';
import { TreasureSvcService } from './../treasure-svc.service';
import { Component, OnInit } from '@angular/core';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
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

  public gfg = false;

  // create properties above ngOnInit and import any types
  leaderData: DisplayPlayer[] = [];

  treasureHistory: Hoard[] = [];

  // OnInit function called when component ready to display
  // such as when user navigates to this component
  ngOnInit(): void {
    this.leaderData = this.gameSvc.leaderboard();
    // console.log(this.leaderData); <-- test succeeded, no longer necessary    
  }
}

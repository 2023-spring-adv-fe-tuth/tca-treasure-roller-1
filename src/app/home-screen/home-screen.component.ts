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
    private gameSvc: TreasureSvcService,
  ) {}

  leaderData: DisplayPlayer[] = [];

  treasureHistory: Hoard[] = [];

  ngOnInit(): void {
    this.leaderData = this.gameSvc.leaderboard();
    this.treasureHistory = this.gameSvc.testH;
  }
}

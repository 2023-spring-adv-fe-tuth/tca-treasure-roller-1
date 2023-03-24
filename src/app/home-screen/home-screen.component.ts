import { TreasureHistory } from './../treasure-types';
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
    private gameSvc: TreasureSvcService
  ) {}

  leaderData: DisplayPlayer[] = [];

  treasureData: TreasureHistory[] = [];

  ngOnInit(): void {
    this.leaderData = this.gameSvc.leaderboard();
    console.log(this.leaderData);   
  }
}

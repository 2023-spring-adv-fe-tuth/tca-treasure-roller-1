import { TreasureSvcService } from './../treasure-svc.service';
import { Encounter, Loot } from './../treasure-types';
import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-result-screen',
  templateUrl: './result-screen.component.html',
  styleUrls: ['./result-screen.component.css']
})

export class ResultScreenComponent {
  constructor(
    private location: Location,
    private accrueTreasure: TreasureSvcService
  ) {};
    encounterTreasure: Loot[] = [];

    saveTreasure = () => {
      this.accrueTreasure.addGameResult({
        winner: "Foxswallow",
        players: ["Foxswallow", "Minion One", "Minion Two"]
      });
      this.location.historyGo(-2);
    };
}

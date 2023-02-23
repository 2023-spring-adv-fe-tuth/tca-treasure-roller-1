import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-result-screen',
  templateUrl: './result-screen.component.html',
  styleUrls: ['./result-screen.component.css']
})

export class ResultScreenComponent {
  constructor(
    private location: Location
  ) {};

    saveTreasure = () => {
      this.location.historyGo(-2);
    };
}

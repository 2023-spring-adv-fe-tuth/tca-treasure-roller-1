import { TreasureSvcService } from './../treasure-svc.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-parameters-screen',
  templateUrl: './parameters-screen.component.html',
  styleUrls: ['./parameters-screen.component.css']
})
export class ParametersScreenComponent implements OnInit {

  constructor(
    private router: Router,
    private svc: TreasureSvcService
  ) {};

  extraPlayers: {
    name: string;
    checked: boolean;
  }[] = [];

  ngOnInit(): void {
    this.extraPlayers = this.svc.getPlayerNames().map(x => ({
      name: x,
      checked: false
    }));

    console.log(this.extraPlayers);
  };

  rollTreasure = () => {
    this.router.navigateByUrl("result-screen");
  };
}

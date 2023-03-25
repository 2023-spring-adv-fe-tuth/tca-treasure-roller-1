import { Hoard } from './../treasure-types';
import { DisplayPlayer } from './../repl-type-definitions';
import { TreasureSvcService } from './../treasure-svc.service';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.css']
})
export class HomeScreenComponent implements OnInit {

  constructor(
    private gameSvc: TreasureSvcService,
    private modalService: NgbModal
  ) {}

  public open(modal: any): void {
    this.modalService.open(modal);
  }

  leaderData: DisplayPlayer[] = [];

  treasureHistory: Hoard[] = [];

  ngOnInit(): void {
    this.leaderData = this.gameSvc.leaderboard();
    console.log(this.leaderData);
    
  }
}

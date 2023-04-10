import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { TreasureSvcService } from '../treasure-svc.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hoard-screen',
  templateUrl: './hoard-screen.component.html',
  styleUrls: ['./hoard-screen.component.css']
})
export class HoardScreenComponent implements OnInit {
  constructor (
    private loc: Location,
    private svc: TreasureSvcService,
    private here: Router
  ) {}

  showMe = this.svc.itsTwo;
  
  updateHoard = () => {
    this.loc.historyGo(-1);
  }

  ngOnInit(): void {
    
  }
  
}

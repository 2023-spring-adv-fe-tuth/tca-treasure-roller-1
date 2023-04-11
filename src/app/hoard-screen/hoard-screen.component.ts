import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { TreasureSvcService } from '../treasure-svc.service';
import { Router } from '@angular/router';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-hoard-screen',
  templateUrl: './hoard-screen.component.html',
  styleUrls: ['./hoard-screen.component.css'],  
  standalone: true,
  imports: [NgbCollapseModule],
})
export class HoardScreenComponent implements OnInit {
  visible = [false];
  constructor (
    private loc: Location,
    private svc: TreasureSvcService,
    private here: Router
  ) {}

  showMe = this.svc.itsTwo;

  

  toggleCollapse = (i: number) => {
    this.visible[i] = !this.visible[i];
  }
  
  updateHoard = () => {
    this.loc.historyGo(-1);
  }

  ngOnInit(): void {
    
  }
  
}

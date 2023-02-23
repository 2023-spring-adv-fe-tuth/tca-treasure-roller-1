import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-parameters-screen',
  templateUrl: './parameters-screen.component.html',
  styleUrls: ['./parameters-screen.component.css']
})
export class ParametersScreenComponent {

  constructor(
    private router: Router
  ) {};

  rollTreasure = () => {
    this.router.navigateByUrl("result-screen");
  };
}

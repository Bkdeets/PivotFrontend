import { Component, OnInit } from '@angular/core';
import { Strategy } from 'src/app/strategy/strategy'

@Component({
  selector: 'app-strategy',
  templateUrl: './strategy.component.html',
  styleUrls: ['./strategy.component.scss']
})
export class StrategyComponent implements OnInit {

  constructor(strategy: Strategy) { }

  ngOnInit() {
  }

}

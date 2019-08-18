import { Component, OnInit, Input } from '@angular/core';
import { Strategy } from 'src/app/strategy/objects/strategy.object'

@Component({
  selector: 'app-strategy-detail',
  templateUrl: './strategy-detail.component.html',
  styleUrls: ['./strategy-detail.component.scss']
})
export class StrategyDetailComponent implements OnInit {
    strategy: Strategy;

  constructor() {
      this.strategy =
          {
              name: 'MA Cross',
              description: 'Trades by going long when the short term moving average of asset prices crosses the long term moving average.',
              pl: -.25
          };
  }

  ngOnInit() {
  }

}

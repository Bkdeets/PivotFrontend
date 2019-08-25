import { Strategy } from './../strategy/objects/strategy.object';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-percent-pill',
  templateUrl: './percent-pill.component.html',
  styleUrls: ['./percent-pill.component.css']
})
export class PercentPillComponent implements OnInit {
	@Input() strategy: Strategy;

  constructor() { }

  ngOnInit() {
  }

}

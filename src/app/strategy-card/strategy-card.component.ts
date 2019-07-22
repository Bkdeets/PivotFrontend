import { Component, OnInit, Input } from '@angular/core';
import { Strategy } from 'src/app/strategy/strategy'

@Component({
	selector: 'app-strategy-card',
	templateUrl: './strategy-card.component.html',
	styleUrls: ['./strategy-card.component.scss']
})
export class StrategyCardComponent implements OnInit {
	@Input() strategy: Strategy;

	constructor() { }

	ngOnInit() {
        console.log(this.strategy.name);
	}

}

import { Component, OnInit, Input } from '@angular/core';
import { Strategy } from 'src/app/strategy/strategy'

@Component({
	selector: 'app-active-strategy-card',
	templateUrl: './active-strategy-card.component.html',
	styleUrls: ['./active-strategy-card.component.scss']
})
export class ActiveStrategyCardComponent implements OnInit {
	@Input() strategy: Strategy;

	constructor() { }

	ngOnInit() {
	}

}

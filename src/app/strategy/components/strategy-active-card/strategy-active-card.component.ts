import { Component, OnInit, Input } from '@angular/core';
import { Strategy } from 'src/app/strategy/objects/strategy.object';
import { Router } from '@angular/router';


@Component({
	selector: 'app-strategy-active-card',
	templateUrl: './strategy-active-card.component.html',
	styleUrls: ['./strategy-active-card.component.scss']
})
export class StrategyActiveCardComponent implements OnInit {
	@Input() strategy: Strategy;

	constructor(private router: Router) { }

	ngOnInit() {

	}

	routeToDetail(){
		this.router.navigate(['/strategy/1']);
	}

}

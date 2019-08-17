import { Component, OnInit, Input } from '@angular/core';
import { Strategy } from 'src/app/strategy/strategy';
import { Router } from '@angular/router';


@Component({
	selector: 'app-active-strategy-card',
	templateUrl: './active-strategy-card.component.html',
	styleUrls: ['./active-strategy-card.component.scss']
})
export class ActiveStrategyCardComponent implements OnInit {
	@Input() strategy: Strategy;

	constructor(private router: Router) { }

	ngOnInit() {

	}

	routeToDetail(){
		this.router.navigate(['/strategy/1']);
	}

}

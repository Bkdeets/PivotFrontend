import { Component, OnInit } from '@angular/core';
import { SessionQuery } from 'src/app/state/session.query';
import { SessionService } from 'src/app/state/session.service';
import { Router } from '@angular/router';
import { Strategy } from 'src/app/strategy/strategy';


@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

    username: String;
	strategies: Strategy[];

	constructor(
		private authQuery: SessionQuery,
        private router: Router,
        private authService: SessionService
    ) {

	}

	ngOnInit() {
        if (!this.authQuery.isLoggedIn()){
            this.router.navigate(['/auth']);
        } else {
            this.authQuery.getUsername().subscribe({
                next: username => this.username = username
            });
        }
		this.strategies = [
			{
				name: 'MA Cross',
				description: 'Trades by going long when the short term moving average of asset prices crosses the long term moving average.',
				pl: -.25
			},
			{
				name: 'Value Investing',
				description: 'Championed by many famous Wall Street investors, Value Investing seeks to discover mispricings in current assets and buy when the market has innaccurately priced a given asset by a certain margin.',
				pl: 78.00
			},
			{
				name: 'RSI',
				description: 'The RSI strategy is based on the RSI indicator which tracks the relative overbought or oversold nature of the price of a given asset.',
				pl: 27.25
			},
			{
				name: 'Trend Following',
				description: 'This trend following strategy seeks to find a trend in the price of a given asset and capitalize on the direction of that price change.',
				pl: 5.95
			}
		];

		document.body.classList.add("bg-dark");
		document.getElementById('nav').classList.add("text-white");

	}

    onLogout(){
        this.authService.logout();
        this.router.navigate(['/auth']);
    }

}

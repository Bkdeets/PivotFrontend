import { Component, OnInit, Input } from '@angular/core';
import { Strategy } from 'src/app/strategy/objects/strategy.object';
import { StrategyCategory } from 'src/app/strategy/objects/strategy-category.object';



@Component({
	selector: 'app-strategy-category-detail',
	templateUrl: './strategy-category-detail.component.html',
	styleUrls: ['./strategy-category-detail.component.scss']
})
export class StrategyCategoryDetailComponent implements OnInit {
	category: StrategyCategory;
	strategies: Strategy[];

	constructor() { }

	ngOnInit() {
		this.category = {
			name: 'Trend Following',
			number: 10,
			description: 'Trend following is an investment or trading strategy which tries to take advantage of long, medium and/or short-term moves that seem to play out in various markets.'
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
	}

}

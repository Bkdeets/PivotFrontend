import { Component, OnInit } from '@angular/core';
import { StrategyCategory } from 'src/app/strategy/objects/strategy-category.object';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';




@Component({
	selector: 'app-explore',
	templateUrl: './explore.component.html',
	styleUrls: ['./explore.component.scss']
})
export class ExploreComponent implements OnInit {
	categories: StrategyCategory[];
	search: FormGroup;

	constructor(
		private router: Router,
		private fb: FormBuilder,
	) { }

	ngOnInit() {

		this.search = this.fb.group({
			search: ['']
		});

		this.categories = [
			{
				name: 'Trend Following',
				number: 7,
				description: ''
			},
			{
				name: 'Value Based',
				number: 12,
				description: ''
			},
			{
				name: 'Arbitrage',
				number: 8,
				description: ''
			},
			{
				name: 'Statistical Arbitrage',
				number: 15,
				description: ''
			},
			{
				name: 'Low Risk',
				number: 10,
				description: ''
			},
			{
				name: 'Mean Reversion',
				number: 5,
				description: ''
			},
			{
				name: 'Trend Following',
				number: 7,
				description: ''
			},
			{
				name: 'Value Based',
				number: 12,
				description: ''
			},
			{
				name: 'Arbitrage',
				number: 8,
				description: ''
			},
			{
				name: 'Statistical Arbitrage',
				number: 15,
				description: ''
			},
			{
				name: 'Low Risk',
				number: 10,
				description: ''
			},
			{
				name: 'Mean Reversion',
				number: 5,
				description: ''
			},
			{
				name: 'Trend Following',
				number: 7,
				description: ''
			},
			{
				name: 'Value Based',
				number: 12,
				description: ''
			},
			{
				name: 'Arbitrage',
				number: 8,
				description: ''
			},
			{
				name: 'Statistical Arbitrage',
				number: 15,
				description: ''
			},
			{
				name: 'Low Risk',
				number: 10,
				description: ''
			},
			{
				name: 'Mean Reversion',
				number: 5,
				description: ''
			}
		];
	}

}

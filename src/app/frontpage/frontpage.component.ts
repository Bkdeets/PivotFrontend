import { Component, OnInit } from '@angular/core';
import "snapsvg-cjs";
declare var Snap: any;
declare var mina: any;

@Component({
	selector: 'app-frontpage',
	templateUrl: './frontpage.component.html',
	styleUrls: ['./frontpage.component.scss']
})
export class FrontpageComponent implements OnInit {

	constructor() { }

	ngOnInit() {
		this.svgAnimate();
	}

	svgAnimate() {}

}

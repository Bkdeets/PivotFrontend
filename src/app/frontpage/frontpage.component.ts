import { Component, OnInit } from '@angular/core';
import "snapsvg-cjs";
declare var Snap: any;
declare var mina: any;
import { Router } from '@angular/router';


@Component({
	selector: 'app-frontpage',
	templateUrl: './frontpage.component.html',
	styleUrls: ['./frontpage.component.scss']
})
export class FrontpageComponent implements OnInit {

	constructor(private router: Router) { }

	ngOnInit() {
		this.svgAnimate();
	}

	svgAnimate() {}

	login() {

	}

	logout() {
		this.router.navigate(['/auth']);
	}

	signup(){

	}

}

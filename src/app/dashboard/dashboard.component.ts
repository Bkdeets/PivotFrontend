import { Component, OnInit } from '@angular/core';
import { SessionQuery } from 'src/app/state/session.query';
import { SessionService } from 'src/app/state/session.service';
import { Router } from '@angular/router';


@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

    username: String;

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
	}

    onLogout(){
        this.authService.logout();
        this.router.navigate(['/auth']);
    }

}

import { Component, OnInit } from '@angular/core';
import { SessionService } from 'src/app/state/session.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor(
      private router: Router,
      private authService: SessionService) { }

  ngOnInit() {
  }

  onLogout(){
      this.authService.logout();
      this.router.navigate(['/auth']);
  }

}

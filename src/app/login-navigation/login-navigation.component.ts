import { Component, OnInit } from '@angular/core';
import { SessionService } from 'src/app/state/session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-navigation',
  templateUrl: './login-navigation.component.html',
  styleUrls: ['./login-navigation.component.scss']
})
export class LoginNavigationComponent implements OnInit {

  constructor(
      private router: Router,
      private authService: SessionService) { }

  ngOnInit() {

  }

  onLogout(){
      
  }

}

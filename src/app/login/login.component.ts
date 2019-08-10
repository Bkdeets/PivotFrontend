import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Wrapper } from './tideline-backend-api-wrapper/wrapper';
import { ActivatedRoute } from '@angular/router';
import { SessionService } from 'src/app/state/session.service';
import { SessionQuery } from 'src/app/state/session.query';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [SessionService],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {

    userLogin: FormGroup;
    loading: Boolean;
    message: String;
    errorMessage: String;

  constructor(
      private router: Router,
      private fb: FormBuilder,
      private activeRoute: ActivatedRoute,
      private authService: SessionService,
      private authQuery: SessionQuery

  ) {

  }

  ngOnInit() {
      this.userLogin = this.fb.group({
          username: ['', Validators.required],
          password: ['', Validators.required]
      });
      const routeParams = this.activeRoute.snapshot.params;
      //
      if (routeParams.message){
          this.message = routeParams.message;
      }
  }

  goHome() {
      this.router.navigate(['/home']);
  }

  async onLogin() {
    let w = new Wrapper();
    let result = await w.login(this.userLogin.value.username, this.userLogin.value.password);
    if (!result.isError) {
        this.authService.login({
            username: this.userLogin.value.username,
            token: result.response.data.token
        });
        this.router.navigate(['/dashboard/{{this.userLogin.username}}']);
    } else {
        this.errorMessage = result.response;
    }
  }

}

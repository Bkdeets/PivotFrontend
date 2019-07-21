import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Wrapper } from 'pivot-backend-api-wrapper/wrapper';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
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
      private activeRoute: ActivatedRoute

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
        console.log(result.response);
        this.router.navigate(['/dashboard/{{this.userLogin.username}}']);
    } else {
        this.errorMessage = result.response;
    }
  }

}

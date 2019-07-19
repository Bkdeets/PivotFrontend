import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Wrapper } from 'pivot-backend-api-wrapper/wrapper';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

    userSignup: FormGroup;
    loading: Boolean;
    // UserService = new UserService();

  constructor(
      private router: Router,
      private fb: FormBuilder) {

  }

  ngOnInit() {
      this.userSignup = this.fb.group({
          username: ['', Validators.required],
          password: ['', Validators.required],
          password_val: ['', Validators.required],
          email: ['', Validators.required]
      });
  }

  goHome() {
      this.router.navigate(['/home']);
  }

  onSubmit() {
      let w = new Wrapper();
      let result = w.register(this.userSignup.value.username, this.userSignup.value.password);
      console.log(result);
      if (result.status == '200'){
          this.router.navigate(['/login']);
      }
  }

  // onLogin() {
  //   let token = this.UserService.getUserToken(this.userLogin.value.username, this.userLogin.value.password);
  //   if (token) {
  //       // redirect to profile page of given user token
  //   } else {
  //       this.error = 'invalid creds bro';
  //   }
  // }

}

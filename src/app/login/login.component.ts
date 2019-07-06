import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../services/user.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {

    userLogin: FormGroup;
    loading: Boolean;

  constructor(
      private router: Router,
      private fb: FormBuilder,
      private userService: UserService ) {

  }

  ngOnInit() {
      this.userLogin = this.fb.group({
          username: ['', Validators.required],
          password: ['', Validators.required]
      });
      this.loading = false;
  }

  goHome() {
      this.router.navigate(['/home']);
  }

  onLogin() {
      this.loading = true;
      console.log(this.userLogin.value);
  }

}

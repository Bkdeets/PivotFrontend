import { Injectable } from '@angular/core';

import { SessionStore } from 'src/app/state/session.store';

export class SessionService {

   constructor(private authStore: SessionStore) { }

   login(user) {
      return this.authStore.login(user);
   }

   logout() {
      this.authStore.logout();
   }
}
